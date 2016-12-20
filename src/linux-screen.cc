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
