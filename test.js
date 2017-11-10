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
    : {
        width: 1024,
        height: 768,
        colorDepth: 24,
        widthMM: 0,
        heightMM: 0
      };

const expectedMultiple =
  process.platform === "linux"
    ? [
        {
          width: 1024,
          height: 768,
          colorDepth: 24,
          widthMM: 342,
          heightMM: 271
        },
        {
          width: 800,
          height: 600,
          colorDepth: 8,
          widthMM: 342,
          heightMM: 271
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
            widthMM: 0,
            heightMM: 0
          }
        ];

/* Development resolution
const expectedMultiple = [
  {
    width: 1280,
    height: 1024,
    colorDepth: 24,
    widthMM: 342,
    heightMM: 271
  }
];
*/

const expected = {
  width: 1280,
  height: 1024,
  colorDepth: 24,
  widthMM: 342,
  heightMM: 271
};

test("exports a function", t => {
  t.is(typeof Screen.main, "function");
});

test("main: return main screen size", t => {
  const size = Screen.main();
  t.is(size.width, expected.width);
  t.is(size.height, expected.height);
  t.is(size.widthMM, expected.widthMM);
  t.is(size.heightMM, expected.heightMM);
  t.is(size.colorDepth, expected.colorDepth);
});

test("all: return all screens size", t => {
  const sizes = Screen.all();
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
