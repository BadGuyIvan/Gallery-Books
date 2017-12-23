const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "styles.css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_module/, use: "babel-loader" },
      {
        test: /\.scss$/,
        use: extractSass.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }],
            fallback: "style-loader"
        })
    },
      { test: /\.json$/, use: "json-loader" },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
        template: "./public/index.html"
    }),
    extractSass
  ],
  devServer: {
    publicPath: '/',
    port: 8080,
    historyApiFallback: true
  }
};
