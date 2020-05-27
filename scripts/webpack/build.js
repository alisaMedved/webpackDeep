// Core
const webpack = require('webpack');
const chalk = require('chalk');

// Config
const config = require('./webpack.config.js');

console.log('---> ', chalk.bgRed.green('START!'));

// compiler
const compiler = webpack(config);

compiler.run((error, stats) => {
    if (error) {
        // ошибка конфигурации
        console.log(error.stack || error);
        if (error.details) {
            console.log(error.details);
        }
        return null;
    }
    console.log(chalk.greenBright('Build complited'));


    const info = stats.toString({
        hash: true,
        // modules: false
    });

    console.log(info);
    if (stats.hasErrors()) {
        // ошибка во время компиляции (битый импорт и тд)
        console.log(chalk.redBright('---> Error!'));
        console.error(info);
    }
    if (stats.hasWarnings()) {
        // warning во время компиляции
        console.log(chalk.yellowBright('---> warning!'));
        console.warn(info);
    }
});
