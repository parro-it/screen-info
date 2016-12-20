const nbind = require('nbind');
const Screen = require('./src/screen');

const binding = nbind.init(__dirname);

binding.bind('Screen', Screen);

exports.mainDisplaySize = binding.lib.Screen.mainDisplaySize;
exports.Screen = Screen;
