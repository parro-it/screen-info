#include <AppKit/AppKit.h>
#include "nbind/nbind.h"
#include "screen.h"

using namespace ScreenInfo;

Screen Screen::main() {
  NSScreen * mainScreen = [NSScreen mainScreen];
  NSRect resolution = mainScreen.frame;
  NSDictionary* screenDictionary = [mainScreen deviceDescription];
  NSNumber* screenID = [screenDictionary objectForKey:@"NSScreenNumber"];
  CGDirectDisplayID aID = [screenID unsignedIntValue];
  CGSize sizeMM = CGDisplayScreenSize(aID);

  return Screen(
    (size_t) resolution.size.width,
    (size_t) resolution.size.height,
    (size_t) sizeMM.width,
    (size_t) sizeMM.height,
    NSBitsPerPixelFromDepth(mainScreen.depth)
  );
}



std::vector<Screen> Screen::all() {
  std::vector<Screen> result;
  NSArray * screens = [NSScreen screens];
  unsigned screenCount = [screens count];

  for (unsigned index  = 0; index < screenCount; index++) {
    NSScreen *screen = [screens objectAtIndex: index];

    NSDictionary* screenDictionary = [screen deviceDescription];
    NSNumber* screenID = [screenDictionary objectForKey:@"NSScreenNumber"];
    CGDirectDisplayID aID = [screenID unsignedIntValue];
    CGSize sizeMM = CGDisplayScreenSize(aID);

    CGSize resolution = screen.frame.size;
    result.push_back(Screen(
      (size_t) resolution.width,
      (size_t) resolution.height,
      (size_t) sizeMM.width,
      (size_t) sizeMM.height,
      NSBitsPerPixelFromDepth(screen.depth)
    ));
  }
  return result;
}
