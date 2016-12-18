const nbind = require('nbind');
const ScreenSize = require('./src/screen-size');

const binding = nbind.init(__dirname);

binding.bind('ScreenSize', ScreenSize);

exports.mainDisplaySize = binding.lib.ScreenInfo.mainDisplaySize;
exports.ScreenSize = ScreenSize;
