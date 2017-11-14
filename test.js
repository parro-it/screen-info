import test from "ava";
import Screen from ".";

const expected =
  process.platform === "win32"
    ? {
        width: 1024,
        height: 768,
        colorDepth: 32,
        widthMM: 0,
        heightMM: 0
      }
    : process.platform === "linux"
      ? {
          width: 1024,
          height: 768,
          colorDepth: 24,
          widthMM: 260,
          heightMM: 195
        }
      : {
          width: 1024,
          height: 768,
          colorDepth: 24,
          widthMM: 361,
          heightMM: 270
        };

const expectedMultiple =
  process.platform === "linux"
    ? [
        {
          width: 1024,
          height: 768,
          colorDepth: 24,
          widthMM: 260,
          heightMM: 195
        },
        {
          width: 800,
          height: 600,
          colorDepth: 8,
          widthMM: 203,
          heightMM: 152
        }
      ]
    : process.platform === "win32"
      ? [
          {
            width: 1024,
            height: 768,
            colorDepth: 32,
            widthMM: 0,
            heightMM: 0
          }
        ]
      : [
          {
            width: 1024,
            height: 768,
            colorDepth: 24,
            widthMM: 361,
            heightMM: 270
          }
        ];

/* Development resolution
const expectedMultiple = [
  {
    width: 1920,
    height: 1080,
    colorDepth: 24,
    widthMM: 473,
    heightMM: 266
  },
  {
    width: 1400,
    height: 1050,
    widthMM: 493,
    heightMM: 370,
    colorDepth: 24
  }
];

const expected = {
  width: 1920,
  height: 1080,
  colorDepth: 24,
  widthMM: 473,
  heightMM: 266
};
*/
test("exports a function", t => {
  t.is(typeof Screen.main, "function");
});

test("main: return main screen size", t => {
  const size = Screen.main();
  console.log(size.toJSON());
  t.is(size.widthMM, expected.widthMM);
  t.is(size.heightMM, expected.heightMM);
  t.is(size.width, expected.width);
  t.is(size.height, expected.height);
  t.is(size.colorDepth, expected.colorDepth);
});

test("all: return all screens size", t => {
  const sizes = Screen.all();
  console.log(sizes.map(s => s.toJSON()));
  t.deepEqual(sizes.map(s => s.toJSON()), expectedMultiple);
});

test("Screen has width and height", t => {
  const size = new Screen(1, 2, 3, 4, 5);
  t.is(size.width, 1);
  t.is(size.height, 2);
  t.is(size.widthMM, 3);
  t.is(size.heightMM, 4);
  t.is(size.colorDepth, 5);
});

test("Screen has custom toString", t => {
  const size = new Screen(800, 600, 0, 0, 32);
  t.is(size.toString(), "800x600x32");
});

test("Screen can be stringified to json", t => {
  const size = new Screen(800, 600, 200, 100, 32);
  t.is(
    JSON.stringify(size),
    '{"width":800,"height":600,"widthMM":200,"heightMM":100,"colorDepth":32}'
  );
});
