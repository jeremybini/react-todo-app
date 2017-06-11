const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageJson = require("./package");

const distPath = path.join(__dirname, "./dist");

const webpackConfiguration = {
  devServer: {
    contentBase: distPath,
    compress: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    host: "0.0.0.0",
    historyApiFallback: true,
    inline: true,
    noInfo: false,
    port: 4321,
    publicPath: "/",
    quiet: false
  },
  entry: {
    app: "./scripts/index.js",
    vendor: Object.keys(packageJson.dependencies)
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
  output: {
    filename: "js/[name].js",
    path: distPath
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      name: "vendor"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      hash: false,
      inject: false,
      minify: false,
      template: "html/index.html"
    })
  ]
};

module.exports = webpackConfiguration;
