# transform-spread-iterable

> An iterable transform that spread each iterable received and emit its items

background details relevant to understanding what this module does

## Usage

Let's spread the `arr` array, each item of `arr` will became an item of resulting iterable:

```js
const spread = require('transform-spread-iterable');

const arr = [1, 2, 3];

for (const item of spread([arr, 42, 43])) {
	console.log({item});
}
```

This will output

```
{item :1}
{item :2}
{item :3}
{item :42}
{item :43}
```

[![Travis Build Status](https://img.shields.io/travis/parro-it/transform-spread-iterable/master.svg)](http://travis-ci.org/parro-it/transform-spread-iterable)
[![Code Climate](https://img.shields.io/codeclimate/github/parro-it/transform-spread-iterable.svg)](https://codeclimate.com/github/parro-it/transform-spread-iterable)
[![Coverage Status](https://coveralls.io/repos/github/parro-it/transform-spread-iterable/badge.svg?branch=master)](https://coveralls.io/github/parro-it/transform-spread-iterable?branch=master)
[![NPM downloads](https://img.shields.io/npm/dt/transform-spread-iterable.svg)](https://npmjs.org/package/transform-spread-iterable)


## API

```js
const spread = (iterable: Iterable): Iterable
```

Given a source iterable, return an iterable with all source item that are iterable spreaded.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install transform-spread-iterable
```


## See Also

- [`noffle/common-readme`](https://github.com/noffle/common-readme)

## License

MIT

