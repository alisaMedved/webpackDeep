//1) webpack
//2) webpack-dev-server (express + webpack-dev-middleware + много хелперов)
//3) webpack-hot-middleware - за обновление отвечает

// webpack-dev-middleware - это мостик между webpack и express (сервер на нем подняли)

// Core
const chalk = require('chalk');
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');

// Config
const config = require('./webpack.config.js');

console.log('---> ', chalk.bgRed.green('START!'));

// compiler
const compiler = webpack(config);

//constants

const {HOST, PORT} = require('./constants');

// на каком хосте и покту разворачивать фронт - historyApiFallback - для SPA - overlay- ошибки удобно в браузере выводит
// quiet clientLogLevel noInfo - вывод лишней инфы
// after - выплнение своей кастомной middleware после всех middleware сервера- есть еще и до
const server = new DevServer(compiler, {
    host: HOST,
    port: PORT,
    historyApiFallback: true,
    overlay: true,
    quiet: true,
    clientLogLevel: 'none',
    noInfo: true,
    after: (app) => {
        app.use(
            hot(compiler, {
                log: false,
            }),
        )
    },
});

server.listen(PORT, HOST, () => {
    console.log(
        `${chalk.greenBright('---> Server listening on')} ${chalk.blueBright(`http://${HOST}:${PORT}`,
            )}`,
    );
});

