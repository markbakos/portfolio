/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			  'white': '#f5f5f5',
			  'black': '#151515',
		}

  	}
  },
  plugins: [require("tailwindcss-animate")],
}

