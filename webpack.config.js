const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ModuleScopePlugin = require('@k88/ModuleScopePlugin');

const APP_SOURCE_PATH = path.resolve(__dirname, 'src');
const PACKAGE_JSON_PATH = path.resolve(__dirname, 'package.json');
const OTHER_PATHS = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, 'public'),
  ];

module.exports = {  
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    plugins: [
      new ModuleScopePlugin(APP_SOURCE_PATH, [ OTHER_PATHS, PACKAGE_JSON_PATH ]),
  ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};
