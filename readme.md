# screen-info

[![greenkeeper](https://badges.greenkeeper.io/parro-it/screen-info.svg)](https://greenkeeper.io/)
[![travis ci](https://img.shields.io/travis/parro-it/screen-info/master.svg)](http://travis-ci.org/parro-it/screen-info)
[![npm version](https://img.shields.io/npm/v/screen-info.svg)](https://npmjs.org/package/screen-info)
[![appveyor ci](https://ci.appveyor.com/api/projects/status/0j904vwgk43vuh3h/branch/master?svg=true)](https://ci.appveyor.com/project/parro-it/screen-info)
[![npm downloads](https://img.shields.io/npm/dt/screen-info.svg)](https://npmjs.org/package/screen-info)

> A native multiplatform module to query the system OS for displays info.

## Usage

Get current screen info & print it to console:

```js
import Screen from ".";

const mainScreen = Screen.main();
console.log(`
  Current screen size is ${mainScreen}
  ${mainScreen.width} pixels width,
  ${mainScreen.height} pixels height,
  ${mainScreen.widthMM} mm width,
  ${mainScreen.heightMM} mm height,
  ${mainScreen.colorDepth} bits per pixels
`);
```

This will output

```
  Current screen size is 1920x1080x24
  1920 pixels width,
  1080 pixels height,
  360 mm width,
  210 mm height,
  24 bits per pixels
```

## API

```js
main: () => {width:number, height: number, colorDepth: number}
```

return the size and color depth of default system display

```js
all: () => [{ width: number, height: number, colorDepth: number }];
```

return the size and color depth of all system displays

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install screen-info
```

## See Also

* [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

MIT
