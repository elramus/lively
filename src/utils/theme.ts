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
  primaryAccent: () => theme.green,

  // Fonts
  headingFont: 'Josefin Sans, sans-serif',
  paragraphFont: 'Libre Franklin, sans-serif',

  // Modular scale font sizes
  ms1: '2.24em',
  ms2: '1.69em',
  ms3: '1.33em',
  ms4: '1em',
  ms5: '0.8em',
  ms6: '0.6em',

  // Shadows
  bigBoxShadow: '3px 10px 25px rgba(0,0,0,.15)',

  // Breakpoints
  md: '950px',
  sm: '767px',
  xs: '400px',
}

export type Theme = typeof theme;
