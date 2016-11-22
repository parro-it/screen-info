{
  'targets': [{
    "includes": [
		"auto.gypi"
	],

    'cflags': [
		"-std=c++11",
	 	"-stdlib=libc++"
	],

    'conditions': [
      ['OS == "mac"', {
	    'sources': [
	      'macos/screen.mm'
	    ],
        'include_dirs': [
          'System/Library/Frameworks/CoreFoundation.Framework/Headers',
          'System/Library/Frameworks/Carbon.Framework/Headers',
          'System/Library/Frameworks/ApplicationServices.framework/Headers',
          'System/Library/Frameworks/OpenGL.framework/Headers',
        ],
        'link_settings': {
          'libraries': [
            '-framework Carbon',
            '-framework CoreFoundation',
            '-framework ApplicationServices',
            '-framework OpenGL'
          ]
        }
      }],

      ['OS == "linux"', {
        'link_settings': {
          'libraries': [
            '-lpng',
            '-lz',
            '-lX11',
            '-lXtst'
          ]
        },

        'sources': [
          'src/linux-screen.cc'
        ]
      }],

      ["OS=='win'", {
        'defines': ['IS_WINDOWS'],
        'sources': [
          'src/windows-screen.cc'
        ]
      }]
    ],


  }],
	"includes": [
		"auto-top.gypi"
	]
}
