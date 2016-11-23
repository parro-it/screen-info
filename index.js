const nbind = require('nbind');

const binding = nbind.init(__dirname);

function Size(w, h) {
	this.w = w;
	this.h = h;
}

Size.prototype.fromJS = function (output) {
	output(this.w, this.h);
};

binding.bind('Size', Size);

module.exports = binding.lib.ScreenInfo;
