// Core
const webpack = require('webpack');
const chalk = require('chalk');

// Config
const getProdConfig = require('./config/webpack.prod.js');

console.log('---> ', chalk.bgRed.green('START!'));

// compiler
const compiler = webpack(getProdConfig());

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

// вот метод run запускается единовременно - все скомпилит и выйдет
// а вот метод watch не выходит из процесса и смотрит есть ли изменения и перекомпиливает все


// мы вклиниваемся в событие жизненного цикла beforeRun синхронной функцией, для ассинхронной tapAsync
compiler.hooks.beforeRun.tap({name: 'start'}, () => {
    console.log(chalk.yellowBright('compilation started'));
});

compiler.hooks.done.tap({name: 'done'}, () => {
    console.log(chalk.yellowBright('compilation completed'));
});
