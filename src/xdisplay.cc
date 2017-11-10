#include "xdisplay.h"
#include <stdio.h> /* For fputs() */
#include <stdlib.h> /* For atexit() */
#include <string.h>

static Display *mainDisplay = NULL;

Display *XGetMainDisplay(void)
{
  if (mainDisplay == NULL) {
    const char *displayName = ":0.0";

    /* First try the user set displayName */
    mainDisplay = XOpenDisplay(displayName);

    /* Then try using environment variable DISPLAY */
    if (mainDisplay == NULL) {
      mainDisplay = XOpenDisplay(NULL);
    }

    if (mainDisplay == NULL) {
      fputs("Could not open main display\n", stderr);
    }

    atexit(&XCloseMainDisplay);

  }

  return mainDisplay;
}

void XCloseMainDisplay(void)
{
  if (mainDisplay != NULL) {
    XCloseDisplay(mainDisplay);
    mainDisplay = NULL;
  }
}
