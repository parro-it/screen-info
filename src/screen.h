#ifndef SCREEN
#define SCREEN

#include "nbind/api.h"

namespace ScreenInfo {
  class Screen {
    private:
      size_t width;
      size_t height;
      size_t widthMM;
      size_t heightMM;
      int colorDepth;

    public:
      Screen(size_t width, size_t height, size_t widthMM, size_t heightMM,int colorDepth);
      size_t getWidth();
      size_t getHeight();
      size_t getWidthMM();
      size_t getHeightMM();
      int getColorDepth();
      void toJS(nbind::cbOutput output);

      static Screen main();
      static std::vector<Screen> all();
  };
}


#endif
