const Screen = require('screen-info');
// This example cannot be run from browser

const size = Screen.main();
console.log(`
	Current screen size is ${size}
	${size.width} pixels width,
	${size.height} pixels height,
	${size.colorDepth} bits per pixels
`);

