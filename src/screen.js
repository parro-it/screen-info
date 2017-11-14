class Screen {
  // eslint-disable-next-line max-params
  constructor(width, height, widthMM, heightMM, colorDepth) {
    this._width = width;
    this._height = height;
    this._widthMM = widthMM;
    this._heightMM = heightMM;
    this._colorDepth = colorDepth;
  }

  get diagonalInches() {
    const { round, sqrt, pow } = Math;
    return (
      round(sqrt(pow(this.widthInches, 2) + pow(this.heightInches, 2)) * 100) /
      100
    );
  }

  get dpi() {
    return Math.round(1000 * this.diagonalPixels / this.diagonalInches) / 1000;
  }

  get diagonalPixels() {
    const { round, sqrt, pow } = Math;
    return round(sqrt(pow(this.width, 2) + pow(this.height, 2)) * 100) / 100;
  }

  get widthInches() {
    return Math.round(1000 * this.widthMM * 0.0393700787402) / 1000;
  }

  get heightInches() {
    return Math.round(1000 * this.heightMM * 0.0393700787402) / 1000;
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
