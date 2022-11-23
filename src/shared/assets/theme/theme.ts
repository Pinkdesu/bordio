import { ITheme } from './types';

const baseTheme: ITheme = {
  color: {
    primary: '#222222',
    secondary: '#8C939F',
    error: '#F21247',

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

    gray800: '#A5A5A5',
    gray400: '#F0F0F0',

    purple800: '#8E4778',
    purple400: '#F2BAE1',
  },

  font: {
    small: '0.8125rem',
    normal: '0.875rem',
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

  media: {
    extraLarge: '(max-width: 1140px)',
    large: '(max-width: 960px)',
    medium: '(max-width: 720px)',
    small: '(max-width: 540px)',
  },
};

export { baseTheme };
