const path = require('path');
const {PROJECT_ROOT} = require('app-root-path');

exports.PROJECT_ROOT = PROJECT_ROOT;
exports.SOURCE_DIRECTORY = path.resolve(PROJECT_ROOT, '/src');
exports.BUILD_DIRECTORY = path.resolve(__dirname, '../../dist');
