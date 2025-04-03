/**
 * External dependencies
 */

export default {
  // Webpack starts bundling the assets from the following file.
  // @see https://webpack.js.org/concepts/#entry
  entry: {
    "divi-integration": './src/integrations/divi.ts',
    "font-only": './src/index.css',
  },

  
  // Divi Visual Builder is already enqueued by WordPress and available
  // in global scope so those scripts don't need to be included on the bundle. For webpack
  // to recognize those files, the global variable needs to be registered as externals.
  // These allows global variable listed below to be imported into the module.
  // @see https://webpack.js.org/configuration/externals/#externals
  externals: {
    // Divi dependencies.
    '@divi/icon-library': ['divi', 'iconLibrary'],
  }
};