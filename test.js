import test from 'ava';
import $package_var from '.';

test('exports a function', t => {
	t.is(typeof $package_var, 'function');
});
