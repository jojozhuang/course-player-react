const path = require("path");
const webpack = require("webpack");

//Uncaught Error: locals[0] does not appear to be a module object with Hot Module replacement API enabled. You should disable react-transform-hmr in production by using env section in Babel configuration. See the example in README: https://github.com/gaearon/react-transform-hmr
// https://stackoverflow.com/questions/36153628/why-does-production-build-of-react-app-with-webpack-and-babel-use-wrong-develo
process.env.NODE_ENV = "production";

export default {
  devtool: "source-map",

  entry: ["./src/index"],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
        API_HOST: JSON.stringify("https://catbook-api.herokuapp.com")
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        loader: "style!css!sass",
        include: path.join(__dirname, "src", "styles")
      },
      {
        test: /\.png$/,
        loader: "file"
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file"
      }
    ]
  }
};
