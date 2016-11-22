#include <ApplicationServices/ApplicationServices.h>

MMSize getMainDisplaySize(void) {
	CGDirectDisplayID displayID = CGMainDisplayID();
	return MMSizeMake(
		CGDisplayPixelsWide(displayID),
		CGDisplayPixelsHigh(displayID)
	);
/* #elif defined(USE_X11)
	Display *display = XGetMainDisplay();
	const int screen = DefaultScreen(display);

	return MMSizeMake((size_t)DisplayWidth(display, screen),
	                  (size_t)DisplayHeight(display, screen));
#elif defined(IS_WINDOWS)
	return MMSizeMake((size_t)GetSystemMetrics(SM_CXSCREEN),
	                  (size_t)GetSystemMetrics(SM_CYSCREEN));
#endif
*/
}
