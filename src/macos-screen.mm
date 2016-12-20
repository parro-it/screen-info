#include <AppKit/AppKit.h>
#include "nbind/nbind.h"
#include "screen.h"

using namespace ScreenInfo;

Screen Screen::mainDisplaySize() {
	NSScreen * mainScreen = [NSScreen mainScreen];
	NSRect resolution = mainScreen.frame;
	return Screen(
		(size_t) resolution.size.width,
		(size_t) resolution.size.height,
		NSBitsPerPixelFromDepth(mainScreen.depth)
	);
}
