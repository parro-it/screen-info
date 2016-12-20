const nbind = require('nbind');
const Screen = require('./src/screen');

const binding = nbind.init(__dirname);

binding.bind('Screen', Screen);

exports.main = binding.lib.Screen.main;
Screen.main = binding.lib.Screen.main;
Screen.all = binding.lib.Screen.all;
exports.Screen = Screen;
