//1) webpack
//2) webpack-dev-server (express + webpack-dev-middleware + много хелперов)
//3) webpack-hot-middleware - за обновление отвечает

// webpack-dev-middleware - это мостик между webpack и express (сервер на нем подняли)

// Core
const chalk = require('chalk');
const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
// альтернативой webpack-hot-middleware - является react-hot-loader
const hot = require('webpack-hot-middleware');

// Config
const getDevConfig = require('./config/webpack.dev.js');

// console.log('---> ', chalk.bgRed.green('START!'));

// compiler
const compiler = webpack(getDevConfig());

//constants

const {HOST, PORT} = require('./constants');

//choose port util
const {choosePort} = require('./utils');

    // hot reloading - вот странно у нас и без него все работает - напоминаем это все в dev
    // Что для него требуется:
    //1) настроить на сервере
    //2)настроить на клиенте
    //3) настроить в вебпак
    //4) настроить в исходном коде

    // на каком хосте и покту разворачивать фронт - historyApiFallback - для SPA - overlay- ошибки удобно в браузере выводит
    // quiet clientLogLevel noInfo - вывод лишней инфы
    // after - выплнение своей кастомной middleware после всех middleware сервера- есть еще и до

    (async () => {
        try {
            const selectedPort = await choosePort(PORT);
            if (!selectedPort) {
                console.log(chalk.yellowBright(`It'' impossible to run the app`));
                return null;
            }
                const server = new DevServer(compiler, {
                    host: HOST,
                    port: selectedPort,
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

                server.listen(selectedPort, HOST, (err) => {
                    console.log(
                        `${chalk.greenBright('---> Server listening on')} ${chalk.blueBright(`http://${HOST}:${selectedPort}`,
                        )}`,
                    );
                });
        } catch (error) {
            console.log(chalk.redBright(`Error!`));
            console.error(error);
        }
    })();




