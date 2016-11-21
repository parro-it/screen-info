import test from 'ava';
import screenInfo from '.';

test('exports a function', t => {
	t.is(typeof screenInfo, 'function');
});
