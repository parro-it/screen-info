#include <windows.h>
#include "nbind/nbind.h"
#include "screen-size.h"


struct ScreenInfo {
	static ScreenSize mainDisplaySize() {
		return ScreenSize(
			(size_t)GetSystemMetrics(SM_CXSCREEN),
			(size_t)GetSystemMetrics(SM_CYSCREEN)
		);
	}
};

NBIND_CLASS(ScreenInfo) {
	construct<>();
	method(mainDisplaySize);
}
