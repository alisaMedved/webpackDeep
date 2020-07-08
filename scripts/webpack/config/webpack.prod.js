const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge  = require("webpack-merge");

// constants

const { BUILD_DIRECTORY } = require("../constants");

// Configuration
const getCommonConfig = require('./webpack.common.js');

module.exports = () => {
    return merge(getCommonConfig(), {
    mode: "none",
    devtool: false,
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: BUILD_DIRECTORY,
            verbose: true,
        }),
    ],
});
};
