class ScreenSize {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	get width() {
		return this._width;
	}

	get height() {
		return this._height;
	}

	fromJS(output) {
		output(this._width, this._height);
	}

	toJSON() {
		const {width, height} = this;
		return {width, height};
	}

	toString(output = this) {
		return `${output.width}x${output.height}`;
	}
}

module.exports = ScreenSize;
