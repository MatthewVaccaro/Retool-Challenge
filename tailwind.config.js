/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			dropShadow: {
				custom: "0 4px 13px rgba(0, 0, 0, 0.07)",
				customLG: "0 6px 8px rgba(0, 0, 0, 0.04)",
			},
			boxShadow: {
				custom: "0 1px 2px 0px rgba(0, 0, 0, 0.04)",
			},
		},
	},
	plugins: [],
};
