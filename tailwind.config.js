// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spacingScale } = require("./src/shared/styles/spacing");

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		spacing: spacingScale,
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
