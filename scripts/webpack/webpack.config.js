const { HotModuleReplacementPlugin } = require("webpack");
const HTMLWebpackPlagin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// constants

const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require("./constants");

module.exports = {
  entry: [
    // вообще костыль это так в энтри поинт строкой писать через квери параметры передавать - reload - эьл
    // чтобы браузер сделал forceUpdate кнопка стрелка + quiet - подрубить клиент к логированию (к логам)
    "webpack-hot-middleware/client?reload=true&quiet=true",
    SOURCE_DIRECTORY,
  ],
  output: {
    path: BUILD_DIRECTORY,
    filename: "build.js",
  },
  mode: "none",
  devtool: false,
  module: {
    rules: [
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
    // new CleanWebpackPlugin({
    //     cleanOnceBeforeBuildPatterns: BUILD_DIRECTORY,
    //     verbose: true,
    // }),
      new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
  ],
};
