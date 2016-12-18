import test from 'ava';
import {ScreenSize, mainDisplaySize} from '.';

test('exports a function', t => {
	t.is(typeof mainDisplaySize, 'function');
});

test('return something', t => {
	const size = mainDisplaySize();
	t.is(size.width, 1280);
	t.is(size.height, 1024);
});

test('ScreenSize has width and height', t => {
	const size = new ScreenSize(1, 2);
	t.is(size.width, 1);
	t.is(size.height, 2);
});
