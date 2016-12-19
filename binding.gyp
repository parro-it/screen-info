{
	'targets': [{
		"includes": [
			"auto.gypi"
		],

		'conditions': [
			['OS == "mac"', {
			'sources': [
				'src/macos-screen.cc',
				'src/screen-size.cc'
			],
				'include_dirs': [
					'System/Library/Frameworks/ApplicationServices.framework/Headers',
				],
				'link_settings': {
					'libraries': [
						'-framework ApplicationServices',
					]
				}
			}],

			['OS == "linux"', {
				'link_settings': {
					'libraries': [
						'-lX11',
					]
				},

				'sources': [
					'src/linux-screen.cc',
					'src/screen-size.cc',
					'src/xdisplay.cc',
				]
			}],

			["OS=='win'", {
				'sources': [
					'src/windows-screen.cc',
					'src/screen-size.cc'
				],
				'msvs_settings': {
					'VCCLCompilerTool': {
							'AdditionalOptions': [
								'/MD',
								'/LD'
							]
					}
				},
				'ldflags': [
						'-Wl,-rpath,<(module_root_dir)',
					],
				"cflags": [
					"-std=c++11",
					"-stdlib=libc++"
				]
			}]
		],
	}],
	"includes": [
		"auto-top.gypi"
	]
}
