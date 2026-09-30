// #!/usr/bin/env node

/**
 * External dependencies
 */
import fs from 'fs';
import path from 'path';
import { optimize, loadConfig } from 'svgo';
import { parseSync, stringify } from 'svgson';
import formatXml from 'xml-formatter';
    
// get the icomoon style.css
if( fs.existsSync( path.join(process.cwd(), 'src', 'style.css') ) ){
    let styleCSS = fs.readFileSync(path.join(process.cwd(), 'src', 'style.css'), 'utf-8');

    styleCSS = styleCSS
        // the fonts needs to be relative not absolute
        .replace(/'fonts\//g, '\'./fonts/')
        // the speak attribute which has been deprecated
        .replace(/speak: never;\n[\s]+/g, '')
        // remove the line-height property
        .replace(/line-height: 1;\n/g, '')
        // icons should always have the !important declaration
        .replace(/(content: \"\\[\w\d]+");/g, '$1 !important;')
    
    // write the modified style.css back to the index.css file
    fs.writeFileSync(path.join(process.cwd(), 'src', 'index.css'), styleCSS, 'utf-8');

    // remove the original style.css file
    fs.unlinkSync(path.join(process.cwd(), 'src', 'style.css'));
}

