import test from 'ava';
import {Screen, main} from '.';

const expected = process.platform === 'win32' ?
	{width: 1024, height: 768, colorDepth: 32} :
	{width: 1024, height: 768, colorDepth: 24};

const expectedMultiple = process.platform === 'linux' ?
	[{width: 1024, height: 768, colorDepth: 24}, {width: 800, height: 600, colorDepth: 8}] :
	[{width: 1024, height: 768, colorDepth: 24}];

/*
const expectedMultiple = [{
	width: 1920,
	height: 1080,
	colorDepth: 24
}, {
	width: 1280,
	height: 960,
	colorDepth: 24
}];

const expected = {width: 1920, height: 1080, colorDepth: 24};
*/

test('exports a function', t => {
	t.is(typeof main, 'function');
});

test('main: return main screen size', t => {
	const size = main();
	t.is(size.width, expected.width);
	t.is(size.height, expected.height);
	t.is(size.colorDepth, expected.colorDepth);
});

test('all: return all screens size', t => {
	const sizes = Screen.all();
	console.log(sizes);
	t.deepEqual(
		sizes.map(s => s.toJSON()),
		expectedMultiple
	);
});

test('Screen has width and height', t => {
	const size = new Screen(1, 2, 3);
	t.is(size.width, 1);
	t.is(size.height, 2);
	t.is(size.colorDepth, 3);
});

test('Screen has custom toString', t => {
	const size = new Screen(800, 600, 32);
	t.is(size.toString(), '800x600x32');
});

test('Screen can be stringified to json', t => {
	const size = new Screen(800, 600, 32);
	t.is(JSON.stringify(size), '{"width":800,"height":600,"colorDepth":32}');
});
