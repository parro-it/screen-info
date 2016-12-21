#include "nbind/nbind.h"
#include <windows.h>
#include "screen.h"

using namespace ScreenInfo;

Screen Screen::main() {
	RECT desktop;
	// Get a handle to the desktop window
	const HWND hDesktop = GetDesktopWindow();

	// Get the size of screen to the variable desktop
	GetWindowRect(hDesktop, &desktop);

	HDC dc = GetDC(hDesktop);
	int bitsPerPixel = GetDeviceCaps(dc, BITSPIXEL);
	ReleaseDC(NULL, dc);


	// The top left corner will have coordinates (0,0)
	// and the bottom right corner will have coordinates
	// (horizontal, vertical)
	return Screen(
		(size_t) desktop.right,
		(size_t) desktop.bottom,
		bitsPerPixel
	);
};



BOOL CALLBACK MonitorEnumProc(HMONITOR hMonitor, HDC hdcMonitor, LPRECT lprcMonitor, LPARAM dwData) {
	std::vector<Screen> *result =  (std::vector<Screen> *)dwData;
	int bitsPerPixel = GetDeviceCaps(hdcMonitor, BITSPIXEL);
	result->push_back(Screen(
		(size_t) lprcMonitor->right,
		(size_t) lprcMonitor->bottom,
		bitsPerPixel
	));

	return TRUE;
}

std::vector<Screen> ScreenInfo::Screen::all() {
	std::vector<Screen> result;
	const HWND hDesktop = GetDesktopWindow();
	HDC dc = GetDC(hDesktop);

	EnumDisplayMonitors(dc, NULL, MonitorEnumProc, (LPARAM)&result);
	return result;
}
