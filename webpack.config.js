// webpack.config.js
const Encore = require('@symfony/webpack-encore');
const CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    .setOutputPath('build/')
    .setPublicPath('/')
    .cleanupOutputBeforeBuild()
    .addEntry('main', './src/index.js')
    .addStyleEntry('styles', './src/index.scss')
    .enableSassLoader()
    .enablePreactPreset()
    .addPlugin(new CopyWebpackPlugin([
      { from: './src/index.html', to: 'index.html' }
    ]))
;

module.exports = Encore.getWebpackConfig();
