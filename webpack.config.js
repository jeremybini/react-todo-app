const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package");

const distPath = path.join(__dirname, "./dist");

const webpackConfiguration = {
  entry: {
    app: "./scripts/index.js",
    vendor: Object.keys(packageJson.dependencies)
  },
  output: {
    filename: "js/[name].js",
    path: distPath
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        test: /\.js$/
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      name: "vendor"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "html/index.html"
    })
  ],
  devServer: {
    contentBase: distPath,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    host: "0.0.0.0",
    historyApiFallback: true,
    inline: true,
    noInfo: true,
    port: 4321,
    publicPath: "/",
    quiet: false
  },
  devtool: "inline-cheap-module-source-map"
};

module.exports = webpackConfiguration;
