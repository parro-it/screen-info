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
	const int screenCount = XScreenCount(display);
	// printf("screenCount %d\n", screenCount);
	for (int index = 0; index < screenCount; index++) {
		size_t width = (size_t) DisplayWidth(display, index);
		// printf("width %d\n", (int) width);

		size_t height = (size_t) DisplayHeight(display, index);
		// printf("height %d\n", (int) height);

		int depth = XDefaultDepth(display, index);
		// printf("depth %d\n", depth);

		ScreenInfo::Screen screen = ScreenInfo::Screen(
			width,
			height,
			depth
		);

		result.push_back(screen);
	}

	return result;
};
