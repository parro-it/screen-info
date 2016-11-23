#include <ApplicationServices/ApplicationServices.h>
#include "nbind/nbind.h"
#include "screen-info.h"



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
	method(mainDisplaySize);
}
