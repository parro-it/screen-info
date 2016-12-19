#include "nbind/nbind.h"
#include <windows.h>
#include "screen-size.h"

using namespace std;

struct ScreenInfo {
	static ScreenSize mainDisplaySize() {
		 RECT desktop;
		// Get a handle to the desktop window
		const HWND hDesktop = GetDesktopWindow();
		// Get the size of screen to the variable desktop
		GetWindowRect(hDesktop, &desktop);
		// The top left corner will have coordinates (0,0)
		// and the bottom right corner will have coordinates
		// (horizontal, vertical)
		return ScreenSize(
			(size_t) desktop.right,
			(size_t) desktop.bottom
		);
	}
};



NBIND_CLASS(ScreenInfo) {
	construct<>();
	method(mainDisplaySize);
}
