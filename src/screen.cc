#include "screen.h"

#include "nbind/nbind.h"

using namespace ScreenInfo;

Screen::Screen(size_t width, size_t height, int colorDepth) {
	this->width = width;
	this->height = height;
	this->colorDepth = colorDepth;
}

size_t Screen::getWidth() {
	return width;
}

size_t Screen::getHeight() {
	return height;
}


int Screen::getColorDepth() {
	return colorDepth;
}

void Screen::toJS(nbind::cbOutput output) {
	output(width, height, colorDepth);
}



NBIND_CLASS(Screen) {
  construct<size_t, size_t, int>();
  method(getWidth);
  method(getHeight);
  method(getColorDepth);
  method(main);
  method(all);
}


