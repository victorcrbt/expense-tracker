import { DefaultTheme } from 'styled-components';

export const defaultTheme = {
  name: 'default',

  colors: {
    lightPrimary: '#ff8091',
    primary: '#ff455e',
    darkPrimary: '#ff334e',

    lightSecondary: '#4dc6ff',
    secondary: '#2BBCFF',
    darkSecondary: '#00aeff',

    success: '',
    warning: '',
    info: '',
    danger: '',

    white: '',
    lightGray: '',
    gray: '',
    darkGray: '',
    black: '',
  },

  fontSize: {
    paragraph: '14px',
    h1: '36px',
    h2: '28px',
    h3: '24px',
    h4: '20px',
    h5: '16px',
    h6: '12px',
  },

  border: {
    size: {
      small: '1px',
      medium: '2px',
      large: '4px',
    },

    radius: {
      small: '4px',
      medium: '8px',
      large: '12px',
    },
  },
} as DefaultTheme;
