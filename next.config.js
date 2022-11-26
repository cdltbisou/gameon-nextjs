/* eslint-disable @typescript-eslint/no-var-requires */
// const languages = require("./config/languages");

const config = {
	images: {
		domains: ["images.ctfassets.net"],
		formats: ["image/webp"]
	},
	serverRuntimeConfig: {},
	publicRuntimeConfig: {},
	eslint: {
		ignoreDuringBuilds: true
	},
	optimizeFonts: false
};

module.exports = config;
