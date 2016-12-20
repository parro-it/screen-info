import test from 'ava';
import {Screen, mainDisplaySize} from '.';

const expected = {width: 1920, height: 1080, colorDepth: 24};
// {width: 1024, height: 768};

test('exports a function', t => {
	t.is(typeof mainDisplaySize, 'function');
});

test('return something', t => {
	const size = mainDisplaySize();
	t.is(size.width, expected.width);
	t.is(size.height, expected.height);
	t.is(size.colorDepth, expected.colorDepth);
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
