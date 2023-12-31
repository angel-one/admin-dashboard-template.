/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				csm: '0px 2px 8px rgba(138, 141, 153, 0.16);',
				clg: '6px 6px 28px rgba(43, 47, 63, 0.100934)',
				fab: '0px 1px 6px rgba(138, 141, 153, 0.24);'
			},
			colors: {
				black: {
					title: '#2A394E',
					DEFAULT: '#000',
					neutral: '#1D1E20'
				},
				blue: {
					primary: '#3F5BD9'
				},
				grey: {
					DEFAULT: '#F4F6FB',
					disabled: '#C2C6CC',
					body: '#6A7582',
					line: '#E8EBF1'
				},
				green: {
					buy: '#1EC7B6',
					tinted: '#E0F7F5',
					DEFAULT: '#E4F8F6'
				},
				red: {
					sell: '#F65E5A'
				},
				white: {
					DEFAULT: '#FFFFFF'
				},
				yellow: {
					primary: '#F9BA4D'
				}
			},
			spacing: {
				120: '30rem',
				160: '40rem',
				256: '64rem'
			},
			maxWidth: {
				11: '11rem',
				21: '21rem',
				30: '30rem',
				'8xl': '85rem'
			},
			zIndex: {
				60: '60'
			}
		}
	},
	plugins: [require('daisyui')]
};
