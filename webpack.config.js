const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend_application/src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/js/bundle.[contenthash].js',
    clean: true
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './frontend_application/public/index.html',
      favicon: false
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'frontend_application/public')
    },
    port: 3000,
    historyApiFallback: true,
    open: false
  }
};
