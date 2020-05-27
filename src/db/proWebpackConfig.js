// // три способа

// =================================== объект
// module.exports = {
//   mode: 'none',
//   devtool: false,
// };
//
// ==================================== функция
// пункт в package.json
// "scripts": {
//     "build": "webpack --env=test"
// },
//
// module.exports = async (env) => {
//     if (env === 'test') {
//         console.log('test - чем удобно что можно читать переменные которые передашь например env');
//     }
//     return {
//         mode: 'none',
//         devtool: false
//     };
// };
//
// ======================================= Промис
//
// const delay = (timeout = 10000) => new Promise(resolve => setTimeout(
//     resolve, timeout
// ));
//
// module.exports = async () => {
//
//   console.log('port = choosePort(3000) в эту задержку мжно делать многое напимер ' +
//       'проверять занят ли порт и предоставлять вместо него первый свободный ' +
//       'можно общаться с сервром отправлять статистику по билдам или получать json файл нашего ' +
//       'webpackconfig.js нашей конфигурации и так далее');
//   await delay();
//   console.log('2 ----');
//   return {
//     mode: 'none',
//     devtool: false
//   };
// };

// ну или так

// module.exports = Promise.resolve({
//   mode: 'none',
//   devtool: false,
// });

