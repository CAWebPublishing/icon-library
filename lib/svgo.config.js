/**
 * Use SVGO to optimize the SVG file removing:
 * - Doctype
 * - Comments
 * - Dimensions
 * - Metadata
 */
export default {
    js2svg: { 
        indent: 2, 
        pretty: true,
    },
    plugins: [
        "removeDoctype",
        "removeComments",
        "removeMetadata",
        "removeDimensions",
        {
            name: 'addDataAttrs',
            fn: () => {
                return {
                    element: {
                        enter: (node) => {
                            if( 'glyph' === node.name && node.attributes['glyph-name'] ) {
                                node.attributes['data-tags'] = node.attributes['glyph-name'] || '';
                            }
                        }
                    }
                }
            }
        },
        {
            name: 'sortAttrs',
            params: {
                order: ['unicode', 'glyph', 'data', 'id', 'horiz', 'units','d'],
                xmlnsOrder: 'front'
            }
        }
    ]
}