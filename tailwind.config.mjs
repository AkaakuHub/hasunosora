/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"fade-in": "fadeIn 0.4s ease-in-out forwards",
				"fade-in-delay-1": "fadeIn 0.4s ease-in-out 1s forwards",
				"fade-in-delay-2": "fadeIn 0.4s ease-in-out 2s forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
			},
			transitionDuration: {
				250: "250ms",
			},
			zIndex: {
				"-10": "-10",
			},
			utilities: {
				".animation-delay-[0ms]": {
					"animation-delay": "0ms",
				},
				".animation-delay-[1000ms]": {
					"animation-delay": "1000ms",
				},
				".animation-delay-[2000ms]": {
					"animation-delay": "2000ms",
				},
			},
		},
	},
	plugins: [],
};
