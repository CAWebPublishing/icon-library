#!/usr/bin/env node

/**
 * External dependencies
 */
import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';
// import { optimize, loadConfig } from 'svgo';
import { parseSync } from 'svgson';

// this is the location of the iconList.json file from the Divi theme
import diviIconLibrary from '../../../../Divi/includes/builder-5/visual-builder/packages/icon-library/src/components/icon-font/iconList.json' with { type: 'json' };

// Constants
const require = createRequire( import.meta.url );
const libPath = path.join(process.cwd(), 'lib');
const srcPath = path.join(process.cwd(), 'src');
const iconsPath = path.join(srcPath, 'icons');

// SVGO Config
// const svgoConfig = await loadConfig( path.join( libPath, 'configs', 'svgo.config.js' ) );

// Main SVG file
const fontsDir = path.resolve( require.resolve('@caweb/icon-library'), '..', 'fonts');
const mainSVGFile = fs.readdirSync( fontsDir, { recursive: true } ).filter( (e) => e.endsWith( '.svg' ) )[0];
const mstrSVGContent = fs.readFileSync(path.join( fontsDir, mainSVGFile )).toString(); 

// SVGO's underlying XML parser introduce strict entity limits to protect against XML entity expansion (Billion Laughs / DoS) attacks
// our file is too big so we skip SVGO optimization
// const mstrSVG = parseSync( optimize( mstrSVGContent, svgoConfig ).data );
const mstrSVG = parseSync( mstrSVGContent );

// master svg definition list
const mstrFontDefs = mstrSVG.children.filter( e => 'defs' === e.name )[0].children[0].children;
const mstrFontList = mstrFontDefs.filter(e => 'glyph' === e.name && e.attributes['glyph-name']);

// we use mstrFontDefs value for the svg viewBox attribute
const {attributes: { 'units-per-em': unitsPerEM, 'descent': descent }} = mstrFontDefs.filter(e => 'font-face' === e.name)[0];
const viewBox = `0 ${descent} ${unitsPerEM} ${unitsPerEM}`;

const caGovIconLibrary = parseSync(
    fs.readFileSync(path.resolve('lib', 'scripts', 'ca-gov-icon.svg')).toString()
).children.filter( e => 'defs' === e.name )[0].children[0].children.filter(e => 'glyph' === e.name && e.attributes['glyph-name']);

// Base jsx template file
const baseJSX = fs.readFileSync( path.join( libPath, 'templates', 'base.tsx.template' ) ).toString();

// used for module logo in the module library
let moduleLogo = 'module-logo';
let moduleDir = path.join( iconsPath, moduleLogo );
let moduleJson = {};

let allIcons = [];
let duplicates = [];

const existsInDivi = (unicode) => {
    return diviIconLibrary.filter(icon => icon.unicode === unicode);
}

// loop through the SVG file list and create a new file for each icon
mstrFontList.forEach( glyph => {
    // glyph attributes
     let { 
          'glyph-name': name, 
          'data-tags': tags, 
          'd' : dimensions,
          unicode
     } = glyph.attributes;

     // if the name is not defined we skip it
     if( ! name ){
          return;
     }
     
     // if there is a unicode we can continue
     if( unicode ){
        // convert the glyph name to a human-readable title case format
        let titleName = name.replaceAll(/[-_]/g, ' ').toLowerCase().split(' ').map( ( w ) => w.charAt(0).toUpperCase() + w.slice(1) ).join(' ');

        // some minor titleName corrections just for consistency purposes
        if( titleName === 'Caweb' ){
            titleName = 'CAWeb';
        }

        // remove the name from the tags.
        tags = tags ? tags.replace( name, '' ).split( ',' ).filter(Boolean).join(' ') : '';

        // create the Icon.data json object
        // this has to match @divi/types/src/icon/index.ts Icon.Type['data']
        let iconData = {
            searchTerms: [
                ...new Set(['caweb',
                name,
                titleName,
                tags].map( t => t.trim().toLowerCase()))
            ].filter(Boolean).join(' '),
            unicode,
            name: titleName,
            styles: [
                'caweb'
            ],
            fontWeight: parseInt( 400 ),
            decodedUnicode: String.fromCodePoint(parseInt(unicode.replace(/[&#x;]/g,''), 16))
        }

        // check if the icon already exists in the diviIconLibrary
        if( existsInDivi( iconData.unicode ).length ){
            duplicates.push( [
                iconData,
                ...existsInDivi( iconData.unicode )
            ] );
        }

        allIcons.push( iconData );
     }


});

// create the icons directory
fs.mkdirSync( iconsPath, { recursive: true } );

// write the full icon list json file
fs.writeFileSync(
     path.join( iconsPath, 'iconList.json' ),
     JSON.stringify( allIcons, null, 4 ), 'utf8'
);

console.log( 'diviLibraryCount', diviIconLibrary.length );
console.log( 'cawebIconLibrary', allIcons.length );
console.log( 'cawebIconLibraryDuplicates', duplicates.length );
console.log( 'cagovIconLibrary', caGovIconLibrary.length );

// console.log('duplicates', duplicates );

// let missing = caGovIconLibrary.filter( caGovIcon => !allIcons.some( cawebIcon => cawebIcon.unicode === caGovIcon.attributes.unicode ) );
let notInCaGov = allIcons.filter( cawebIcon => !caGovIconLibrary.some( caGovIcon => cawebIcon.unicode === caGovIcon.attributes.unicode ) );
notInCaGov.forEach( cawebIcon => {
    console.log( 'CaWeb Icon not in CAGov:', cawebIcon.unicode, cawebIcon.name );
    console.log( 'Exists in Divi', existsInDivi( cawebIcon.unicode ) );
});
console.log( 'in CAWeb not CaGov tho', notInCaGov.length );
// console.log( existsInDivi(notInCaGov[0].unicode) );
