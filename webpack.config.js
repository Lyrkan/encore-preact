// webpack.config.js
const Encore = require('@symfony/webpack-encore');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
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

if (!Encore.isProduction()) {
  Encore.addPlugin(new BrowserSyncPlugin(
    { proxy: 'http://localhost:8080' },
    { reload: false }
  ));
}

module.exports = Encore.getWebpackConfig();
