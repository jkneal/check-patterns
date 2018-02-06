var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var NODE_PATH = path.join(__dirname, 'node_modules');
var SOURCE_PATH = path.join(__dirname, 'src');

var address = 'localhost';
var port = 8000;

module.exports = {
    context: SOURCE_PATH,
    entry: {
        app: './index.jsx'
    },
    output: {
      filename: '[name].js',
      pathInfo: true,
      path: path.join(__dirname, 'build')
    },
    devtool: '#source-map',
    devServer: {
      address: address,
      hot: true,
      noInfo: true,
      port: port,
      url: makeUrl(address, port),
      contentBase: 'build',
      historyApiFallback: true
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
      fallback: NODE_PATH,
      alias: {
        "jquery": path.join(SOURCE_PATH, "./jquery-stub.js")
      }
    },
    resolveLoader: {
      fallback: NODE_PATH
    },
    module: {
        loaders: [
            {test: /\.(js|jsx)$/, loaders: ['babel', 'babel-loader'], exclude: /node_modules/},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          //'process.env.NODE_ENV': '"development"'
          'process.env.NODE_ENV': '"production"'
        }),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
          inject: true,
          template: path.join(SOURCE_PATH, 'index.html')
        }),
        new CopyWebpackPlugin([
          {from: 'audio', to: 'audio'},
          {from: 'lib', to: 'lib'},
          {from: 'fonts', to: 'fonts'},
          {from: 'images', to: 'images'}
        ])
    ]
}

function makeUrl(address, port) {
  return 'http://' + address + ':' + port;
}
