#include "nbind/nbind.h"
#include "nbind/api.h"
#include <X11/Xlib.h>
#include "xdisplay.h"
#include "screen-size.h"

struct ScreenInfo {
	static ScreenSize mainDisplaySize() {
		Display *display = XGetMainDisplay();
		const int screen = DefaultScreen(display);

		return ScreenSize(
			(size_t)DisplayWidth(display, screen),
			(size_t)DisplayHeight(display, screen)
		);
	}
};

NBIND_CLASS(ScreenInfo) {
	construct<>();
	method(mainDisplaySize);
}
