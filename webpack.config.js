const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package");

const distPath = path.join(__dirname, "./dist");

const webpackConfiguration = {
  entry: {
    app: "./scripts/index.js"
  },
  output: {
    filename: "js/[name].js",
    path: distPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "html/index.html"
    })
  ]
};

module.exports = webpackConfiguration;
