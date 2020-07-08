const { HotModuleReplacementPlugin } = require("webpack");
const merge  = require("webpack-merge");


// Configuration
const getCommonConfig = require('./webpack.common.js');

module.exports = () => {
    return merge(getCommonConfig(), {
    entry: [
        // вообще костыль это так в энтри поинт строкой писать через квери параметры передавать - reload - эьл
        // чтобы браузер сделал forceUpdate кнопка стрелка + quiet - подрубить клиент к логированию (к логам)
        "webpack-hot-middleware/client?reload=true&quiet=true",
    ],
    mode: "none",
    devtool: false,
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
});
};
