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
  }
};

module.exports = webpackConfiguration;
