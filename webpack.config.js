/**
 * External dependencies
 */

export default {
  // Webpack starts bundling the assets from the following file.
  // @see https://webpack.js.org/concepts/#entry
  entry: {
    "divi-integration": './src/integrations/divi.ts',
    "font-only": './src/style.css',
  },

  
  // Divi Visual Builder use of scripts that is already enqueued by WordPress and available
  // in global scope so those scripts don't need to be included on the bundle. For webpack
  // to recognize those files, the global variable needs to be registered as externals.
  // These allows global variable listed below to be imported into the module.
  // @see https://webpack.js.org/configuration/externals/#externals
  externals: {
    // Divi dependencies.
    '@divi/icon-library': ['divi', 'iconLibrary'],
    /*

    '@wordpress/i18n': ['vendor', 'wp', 'i18n'],
        
    '@divi/rest': ['divi', 'rest'],
    '@divi/conversion': ['divi', 'conversion'],
    '@divi/data': ['divi', 'data'],
    '@divi/module': ['divi', 'module'],
    '@divi/module-utils': ['divi', 'moduleUtils'],
    '@divi/modal': ['divi', 'modal'],
    '@divi/field-library': ['divi', 'fieldLibrary'],
    '@divi/module-library': ['divi', 'moduleLibrary'],
    '@divi/style-library': ['divi', 'styleLibrary'],
    */
  }
};