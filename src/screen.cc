#include "screen.h"

#include "nbind/nbind.h"

using namespace ScreenInfo;

Screen::Screen(size_t width, size_t height, size_t widthMM, size_t heightMM, int colorDepth) {
  this->width = width;
  this->height = height;
  this->widthMM = widthMM;
  this->heightMM = heightMM;
  this->colorDepth = colorDepth;
}

size_t Screen::getWidth() {
  return width;
}

size_t Screen::getHeight() {
  return height;
}


size_t Screen::getWidthMM() {
  return widthMM;
}

size_t Screen::getHeightMM() {
  return heightMM;
}

int Screen::getColorDepth() {
  return colorDepth;
}

void Screen::toJS(nbind::cbOutput output) {
  output(width, height, widthMM, heightMM, colorDepth);
}



NBIND_CLASS(Screen) {
  construct<size_t, size_t, size_t, size_t, int>();
  method(getWidth);
  method(getHeight);
  method(getWidthMM);
  method(getHeightMM);
  method(getColorDepth);
  method(main);
  method(all);
}


