// #!/usr/bin/env node

/**
 * External dependencies
 */
import fs from 'fs';
import path from 'path';
import { optimize, loadConfig } from 'svgo';
import { parseSync, stringify } from 'svgson';
import formatXml from 'xml-formatter';
    
// Constants
const libPath = path.join(process.cwd(), 'lib');
const srcPath = path.join(process.cwd(), 'src');
const fontsPath = path.join(srcPath, 'fonts');

// this is the State Template file location, update this accordingly
const cagovIconPath = path.join(libPath, 'ca-gov-icon.svg');

// SVGO Config
const svgoConfig = await loadConfig( path.join( libPath,'svgo.config.js' ) );

const parseSVG = (svgFileName) => {
    return fs.existsSync(svgFileName) ? 
        // parse using svgson
        parseSync(
            // optimize svg using svgo
            optimize(
                // read svg file content
                // double encode the & otherwise when we write the file the & would be interpreted as an entity
                fs.readFileSync(svgFileName, 'utf-8').toString().replace(/&/g, '&amp;'),
                svgoConfig
            ).data
        )
        : [];
};

const getGlyphs = (svgObj) => {
    const svg = 'string' === typeof svgObj ? parseSVG(svgObj) : svgObj;

    return svg.children
        .filter( e => 'defs' === e.name )[0].children[0].children
        .filter( e => 'glyph' === e.name );
};

const getNonGlyphs = (svgObj) => {
    const svg = 'string' === typeof svgObj ? parseSVG(svgObj) : svgObj;

    return svg.children
        .filter( e => 'defs' === e.name )[0].children[0].children
        .filter( e => 'glyph' !== e.name );
};

const appendGlyphs = (currentGlyphs, newGlyphs) => {
    let notInCurrentGlyphs = newGlyphs.filter( newIcon => ! currentGlyphs.some( currentIcon => currentIcon.attributes.unicode === newIcon.attributes.unicode ) );
    
    if( notInCurrentGlyphs.length > 0 ) {
        currentGlyphs.push(...notInCurrentGlyphs);
    }
};

const setGlyphs = ( svgObj, glyphs ) => {
    // set the glyphs in the SVG object
    svgObj.children.filter( e => 'defs' === e.name )[0].children[0].children = glyphs;
};

let cawebIconLibrary = parseSVG(path.join(fontsPath, 'CaGov.svg'));
let cawebIcons = getGlyphs(cawebIconLibrary);

let cagovIcons = fs.existsSync(cagovIconPath) ? getGlyphs(cagovIconPath) : [];

// append new cagov icons to caweb existing icons
// appendGlyphs(cawebIcons, cagovIcons);

// set the glyphs including non-glyph elements back to the SVG object
setGlyphs( cawebIconLibrary, [...getNonGlyphs(cawebIconLibrary),...cawebIcons ] );

// write the updated SVG content to a new file
fs.writeFileSync(
    path.join(fontsPath, 'CaGov.svg'),
    // escape double encoded ampersands
    formatXml(stringify(cawebIconLibrary).replace(/&amp;amp;/g, '&'),
     { collapseContent: true }
    )
);