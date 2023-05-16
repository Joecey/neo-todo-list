/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				brutalBlue: {
					100: "#daf5f0",
					200: "#a7dbd8",
					300: "#87ceeb",
					400: "#69d2e7",
				},

				brutalYellow: {
					100: "#fdfd96",
					200: "#ffdb58",
					300: "#f4d738",
					400: "#e3a018",
				},

				brutalRed: {
					100: "#f8d6b3",
					200: "#ffa07a",
					300: "#ff7a5c",
					400: "#ff6b6b",
				},

				brutalPink: {
					100: "#fcdfff",
					200: "#ffc0cb",
					300: "#ffb2ef",
					400: "#ff69b4",
				},

				brutalPurple: {
					100: "#e3dff2",
					200: "#c4a1ff",
					300: "#a388ee",
					400: "#ae4ad9",
				},
			},
		},
	},
	plugins: [],
};
