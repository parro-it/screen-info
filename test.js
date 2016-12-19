import test from 'ava';
import {ScreenSize, mainDisplaySize} from '.';

const expected = {width: 1024, height: 768};

test('exports a function', t => {
	t.is(typeof mainDisplaySize, 'function');
});

test('return something', t => {
	const size = mainDisplaySize();
	t.is(size.width, expected.width);
	t.is(size.height, expected.height);
});

test('ScreenSize has width and height', t => {
	const size = new ScreenSize(1, 2);
	t.is(size.width, 1);
	t.is(size.height, 2);
});

test('ScreenSize has custom toString', t => {
	const size = new ScreenSize(800, 600);
	t.is(size.toString(), '800x600');
});

test('ScreenSize can be stringified to json', t => {
	const size = new ScreenSize(800, 600);
	t.is(JSON.stringify(size), '{"width":800,"height":600}');
});
