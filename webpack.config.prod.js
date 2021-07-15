const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

const outputDirectory = "dist";

module.exports = {
  //devtool: "source-map",

  entry: ["./src/index"],

  output: {
    path: path.join(__dirname, outputDirectory),
    filename: "bundle.js",
    publicPath: "/public/"
  },

  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      title: "Online Code Editor",
      template: path.join(__dirname, "./src", "index.html"),
      favicon: path.join(__dirname, "./public", "assets", "favicon.ico")
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        API_URL: JSON.stringify("https://gamestore-api.azurewebsites.net")
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        use: ["style!css!sass"],
        include: path.join(__dirname, "src", "styles")
      },
      {
        test: /\.png$/,
        use: ["file"]
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: ["file"]
      }
    ]
  }
};
