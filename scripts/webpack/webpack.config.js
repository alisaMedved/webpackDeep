const HTMLWebpackPlagin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// constants

const {
  BUILD_DIRECTORY,
  SOURCE_DIRECTORY,
} = require("./constants");

module.exports = {
    entry: {
      path: SOURCE_DIRECTORY,
      filename: 'index.js'
    },
    output: {
      path: BUILD_DIRECTORY,
        filename: 'build.js'
    },
    mode: "none",
    devtool: false,
    plugins: [
      new HTMLWebpackPlagin({
        tittle: "Docff",
        template: "./static/template.html",
        favicon: "./static/favicon.ico",
      }),
      new CleanWebpackPlugin(),
    ],
  };
