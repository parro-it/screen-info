#include "nbind/nbind.h"
#include "nbind/api.h"
#include <X11/Xlib.h>
#include "xdisplay.h"
#include "screen.h"

ScreenInfo::Screen ScreenInfo::Screen::main() {
	Display *display = XGetMainDisplay();
	const int screen = DefaultScreen(display);

	return ScreenInfo::Screen(
		(size_t)DisplayWidth(display, screen),
		(size_t)DisplayHeight(display, screen),
		XDefaultDepth(display, screen)
	);
};

std::vector<ScreenInfo::Screen> ScreenInfo::Screen::all() {
	std::vector<ScreenInfo::Screen> result;

	Display *display = XGetMainDisplay();
	const unsigned screenCount = XScreenCount(display);

	for (unsigned index  = 0; index < screenCount; index++) {
		::Screen * screen = XScreenOfDisplay(display, index);
		result.push_back(ScreenInfo::Screen(
			(size_t) DisplayWidth(display, index),
			(size_t) DisplayHeight(display, index),
			XDefaultDepth(display, index)
		));
	}

	return result;
};
