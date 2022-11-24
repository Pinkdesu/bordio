import { ITheme } from './types';

const baseTheme: ITheme = {
  color: {
    primary: '#222222',
    secondary: '#8C939F',
    error: '#F21247',

    black: '#000000',
    white: '#FFFFFF',

    ocean800: '#0F1D40',
    ocean500: '#2D4071',
    ocean400: '#404784',

    khaki800: '#4A4D3A',
    khaki400: '#D9E6A2',

    teal800: '#435E52',
    teal400: '#ABE9CE',

    blue800: '#0094FF',

    red800: '#662E1E',
    red500: '#FEC6B7',
    red400: '#FFDFBA',

    gray800: '#8C939F',
    gray700: '#A5A5A5',
    gray600: '#E1E4E7',
    gray500: '#F5F8FA',
    gray400: '#F0F0F0',
    gray300: '#F0F1F2',

    purple800: '#8E4778',
    purple400: '#F2BAE1',
  },

  font: {
    tiny: '0.625rem',
    small: '0.8125rem',
    normal: '0.875rem',
    big: '1.125rem',
  },

  fontWeight: {
    normal: 400,
    bold: 500,
  },

  radius: {
    tiny: '4px',
    small: '8px',
    normal: '50px',
    big: '100px',
  },

  sizis: {
    menu: '219px',
  },

  duration: {
    normal: '250ms',
  },
};

export { baseTheme };
