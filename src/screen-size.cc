#include "screen-size.h"

#include "nbind/nbind.h"

ScreenSize::ScreenSize(size_t width, size_t height) {
	w = width;
	h = height;
}

size_t ScreenSize::getWidth() {
	return w;
}

size_t ScreenSize::getHeight() {
	return h;
}

void ScreenSize::toJS(nbind::cbOutput output) {
	output(w, h);
}



NBIND_CLASS(ScreenSize) {
  construct<size_t, size_t>();
  method(getWidth);
  method(getHeight);
}


