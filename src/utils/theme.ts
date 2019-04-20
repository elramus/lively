export interface Theme {
  darkGray: string;
  middleGray: string;
  lightGray: string;
  offWhite: string;
  red: string;
  blue: string;
  darkBlue: string;
  circuitPath: string;
  circuitPoint: string;
  green: string;
  ms1: string;
  ms2: string;
  ms3: string;
  ms4: string;
  ms5: string;
  ms6: string;
  bigBoxShadow: string;
  md: string;
  sm: string;
  xs: string;
}

export const theme: Theme = {
  // Grays
  darkGray: '#525252',
  middleGray: '#9B9B9B',
  lightGray: '#d6d6d6',
  offWhite: '#cfd7ff',

  // Colors
  darkBlue: '#000729',
  red: '#FE9A75',
  blue: '#99d4ff',
  green: '#9EE681',

  // UI Color Choices
  circuitPath: '#202971',
  circuitPoint: '#202971',

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
