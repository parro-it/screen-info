#include <ApplicationServices/ApplicationServices.h>
#include "nbind/nbind.h"
#include "screen-size.h"

struct ScreenInfo {
	static ScreenSize mainDisplaySize() {
		CGDirectDisplayID displayID = CGMainDisplayID();
		return ScreenSize(
			CGDisplayPixelsWide(displayID),
			CGDisplayPixelsHigh(displayID)
		);
	}
};

NBIND_CLASS(ScreenInfo) {
	construct<>();
	method(mainDisplaySize);
}
