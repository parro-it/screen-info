#ifndef SCREEN_SIZE
#define SCREEN_SIZE

class ScreenSize {
	private:
		size_t w;
		size_t h;

	public:
		ScreenSize(size_t w, size_t h);
		size_t getWidth();
		size_t getHeight();
		void toJS(nbind::cbOutput output);
};

#endif
