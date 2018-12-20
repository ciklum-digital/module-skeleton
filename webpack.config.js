const path = require('path')
const { ProvidePlugin } = require('webpack');

const providePlugin = new ProvidePlugin({
  regeneratorRuntime: 'regenerator-runtime',
})

module.exports = {
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'src',
      'node_modules',
    ],
  },
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
    library: '[name]',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [
          /\.(spec|e2e)\.js$/,
          /node_modules/,
        ],
      },
    ],
    noParse: [
      /\.(spec|e2e)\.js$/,
      /LICENSE/,
      /README.md/,
    ],
  },
  plugins: [
    providePlugin,
  ],
  node: {
    global: true,
    crypto: 'empty',
    process: false,
    module: false,
    clearImmediate: false,
    setImmediate: false,
  },
}
