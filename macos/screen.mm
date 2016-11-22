#include <ApplicationServices/ApplicationServices.h>
#include "nbind/nbind.h"


struct _MMSize {
	size_t width;
	size_t height;
};

typedef struct _MMSize MMSize;


struct ScreenInfo {
	static int mainDisplaySize() {
		return 42;
		/*CGDirectDisplayID displayID = CGMainDisplayID();
		return MMSizeMake(
			CGDisplayPixelsWide(displayID),
			CGDisplayPixelsHigh(displayID)
		);*/
	}
};


NBIND_CLASS(ScreenInfo) {
	method(mainDisplaySize);
}
