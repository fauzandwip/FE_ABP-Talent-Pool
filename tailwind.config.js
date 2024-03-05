/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'blue-primary': '#16ABF8',
				'white-secondary': '#F4F4F4',
				'gray-primary': '#888888',
			},
		},
	},
	plugins: [],
};
