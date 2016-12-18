# screen-info

> Multiplatform screen & monitors info

This is a native multiplatform module to query the system for current display info.

## Usage

Get current screen size & print it to console:

```js
import {mainDisplaySize} from '.';

const size = mainDisplaySize();
console.log(`
	Current screen size is ${size}
	${size.width} pixels width,
	${size.height} pixels height
`);

```

This will output

```
Current screen size is 800x600
800 pixels width,
600 pixels height
```

[![Travis Build Status](https://img.shields.io/travis/parro-it/screen-info/master.svg)](http://travis-ci.org/parro-it/screen-info)
[![Code Climate](https://img.shields.io/codeclimate/github/parro-it/screen-info.svg)](https://codeclimate.com/github/parro-it/screen-info)
[![Coverage Status](https://coveralls.io/repos/github/parro-it/screen-info/badge.svg?branch=master)](https://coveralls.io/github/parro-it/screen-info?branch=master)
[![NPM downloads](https://img.shields.io/npm/dt/screen-info.svg)](https://npmjs.org/package/screen-info)


## API

```js
mainDisplaySize: () => {width:number, height: number}
```

return the size of default system display

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install screen-info
```

## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

MIT

