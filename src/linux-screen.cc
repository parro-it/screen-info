#include "nbind/nbind.h"
#include "nbind/api.h"
#include <X11/Xlib.h>
#include "xdisplay.h"
#include "screen.h"

using namespace ScreenInfo;

Screen Screen::mainDisplaySize() {
	Display *display = XGetMainDisplay();
	const int screen = DefaultScreen(display);

	return Screen(
		(size_t)DisplayWidth(display, screen),
		(size_t)DisplayHeight(display, screen)
	);
};
