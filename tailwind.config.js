// tailwind.config.js
import { nextui } from '@nextui-org/react';

// primary - #684DEC
// secondary - #FFBF75;
// background - #EEE;
// card background - #FFF;
// dark - #222831;
// light grey - #393E48;

// button -
// border-radius: 1.875rem;
// background: var(--green-gradient, linear-gradient(136deg, #917AFD 2.61%, #6246EA 96.58%));

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js',
	],
	theme: {
		extend: {
			width: {
				84: '21.4375rem',
			},
			borderRadius: {
				xl: '1.875rem',
			},
		},
	},
	darkMode: 'class',
	plugins: [
		nextui({
			themes: {
				'purple-light': {
					fontFamily: {
						display: ['SF Pro Display'],
						body: ['SF Pro Display'],
					},
					extend: 'light', // <- inherit default values from dark theme
					colors: {
						background: '#EEE',
						foreground: '#ffffff',
						primary: {
							DEFAULT: '#684DEC',
							foreground: '#ffffff',
						},
						secondary: {
							DEFAULT: '#FFBF75',
							foreground: '#ffffff',
						},

						dark: '#222831',
						grey: '#393E48',
						focus: '#F182F6',
					},
					layout: {
						disabledOpacity: '0.3',
						radius: {
							small: '4px',
							medium: '6px',
							large: '8px',
							'button-primary': '1.875rem',
						},
						borderWidth: {
							small: '1px',
							medium: '2px',
							large: '3px',
						},
						width: {
							'button-primary': '21.4375rem',
						},
					},
					backgroundColor: {
						'button-primary':
							'linear-gradient(136deg, #917AFD 2.61%, #6246EA 96.58%)',
						'button-secondary': 'var(--Neutral-Gray-0, #FFF)',
						'onboarding-background':
							'linear-gradient(180deg, rgba(251, 251, 251, 0.00) 53.59%, #FCFCFC 87.94%)',
					},
					textColor: {
						'button-primary': '#FFFFFF',
					},
				},
			},
		}),
		// eslint-disable-next-line no-undef
		require('@tailwindcss/forms'),
	],
};
