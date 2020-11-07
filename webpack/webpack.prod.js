const { entry, root } = require('./webpack');
const { base } = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const Analyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

/**
 * Prod configuration
 */
module.exports = merge(base, {
  mode: 'production',
  entry,
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        // vendor chunk
        // vendor: {
        //   // minChunks: 2,
        //   name: 'vendor',
        //   chunks: 'all',
        //   // import file path containing node_modules
        //   test: /node_modules/
        // }

        // common chunk
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'async',
          priority: 20,
          reuseExistingChunk: true,
          enforce: true
        },
        vendor: {
          // name of the chunk
          name: 'vendor',
          // async + async chunks
          chunks: 'all',
          // import file path containing node_modules
          test: /node_modules/,
          // priority
          priority: 10
        }
      }
    },
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [root('dist')]
    }),
    new Analyzer({
      statsFilename: root('report/stats.html'),
      analyzerMode: 'static'
    }),
    new LodashModuleReplacementPlugin()
  ]
});
