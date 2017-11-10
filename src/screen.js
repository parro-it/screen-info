class Screen {
  // eslint-disable-next-line max-params
  constructor(width, height, widthMM, heightMM, colorDepth) {
    this._width = width;
    this._height = height;
    this._widthMM = widthMM;
    this._heightMM = heightMM;
    this._colorDepth = colorDepth;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get widthMM() {
    return this._widthMM;
  }

  get heightMM() {
    return this._heightMM;
  }

  get colorDepth() {
    return this._colorDepth;
  }

  fromJS(output) {
    output(
      this._width,
      this._height,
      this._widthMM,
      this._heightMM,
      this._colorDepth
    );
  }

  toJSON() {
    const { width, height, widthMM, heightMM, colorDepth } = this;
    return { width, height, widthMM, heightMM, colorDepth };
  }

  toString(output = this) {
    return `${output.width}x${output.height}x${output.colorDepth}`;
  }
}

module.exports = Screen;
