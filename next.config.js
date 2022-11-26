/* eslint-disable @typescript-eslint/no-var-requires */
// const languages = require("./config/languages");

const config = {
	images: {
		domains: ["images.ctfassets.net"],
		formats: ["image/webp"]
	},
	serverRuntimeConfig: {},
	publicRuntimeConfig: {
		contentful: {
			baseUrl: process.env.CONTENTFUL_BASE_URL,
			space: process.env.CONTENTFUL_SPACE_ID,
			token: process.env.CONTENTFUL_TOKEN,
			env: process.env.CONTENTFUL_ENV,
			previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN
		}
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	optimizeFonts: false
};

module.exports = config;
