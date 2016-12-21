class Screen {
	constructor(width, height, colorDepth) {
		this._width = width;
		this._height = height;
		this._colorDepth = colorDepth;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	get colorDepth() {
		return this._colorDepth;
	}

	fromJS(output) {
		output(this._width, this._height, this._colorDepth);
	}

	toJSON() {
		const {width, height, colorDepth} = this;
		return {width, height, colorDepth};
	}

	toString(output = this) {
		return `${output.width}x${output.height}x${output.colorDepth}`;
	}
}

module.exports = Screen;
