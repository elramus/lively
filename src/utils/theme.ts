export const theme = {
	// Structure
	globalMaxWidth: '90em',

	// Grays
	darkGray: '#525252',
	middleGray: '#9B9B9B',
	lightGray: '#d6d6d6',
	offWhite: '#cfd7ff',

	// Colors
	darkBlue: '#060022',
	blue: '#99d4ff',
	red: '#FE9A75',
	green: '#9EE681',

	// UI Color Choices
	primaryAccent: (): string => theme.green,

	// Fonts
	headingFont: 'Josefin Sans, sans-serif',
	paragraphFont: 'Libre Franklin, sans-serif',

	/**
	 * Typographic module scale! Base font size here is 16px. Change to
	 * whatever you want.
	 *
	 * Calculated from base font size with a ratio of 1.33. So, ms(0) is your
	 * base font size, and you can go up and down from there.
	 * https://www.modularscale.com.
	 */
	ms: (modifier: number): string => `${(16 * 1.33 ** modifier).toFixed(2)}px`,

	// Shadows
	bigBoxShadow: '3px 10px 25px rgba(0,0,0,.15)',

	// Breakpoints
	md: '1100px',
	sm: '767px',
	xs: '400px',
}

export type Theme = typeof theme
