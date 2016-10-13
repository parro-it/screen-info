import test from 'ava';
import $package_var from './main';

test('exports a function', t => {
	t.is(typeof $package_var, 'function');
});
