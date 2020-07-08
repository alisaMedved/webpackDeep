const HTMLWebpackPlagin = require("html-webpack-plugin");


// constants

const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require("../constants");

module.exports = () => {
  return {
  entry: [
    SOURCE_DIRECTORY,
  ],
  output: {
    path: BUILD_DIRECTORY,
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.js/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlagin({
      tittle: "Docff",
      template: "./static/template.html",
      favicon: "./static/favicon.ico",
    }),
  ],
};
};
