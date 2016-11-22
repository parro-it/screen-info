import test from 'ava';
import ScreenInfo from '.';

test('exports a function', t => {
	t.is(typeof ScreenInfo.mainDisplaySize, 'function');
});

test('return something', t => {
	t.is(ScreenInfo.mainDisplaySize(), 42);
});
