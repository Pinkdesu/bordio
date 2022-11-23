interface ITheme {
  color: {
    primary: string;
    secondary: string;
    error: string;

    white: string;

    ocean800: string;
    ocean500: string;
    ocean400: string;

    khaki800: string;
    khaki400: string;

    teal800: string;
    teal400: string;

    blue800: string;

    red800: string;
    red500: string;
    red400: string;

    gray800: string;
    gray400: string;

    purple800: string;
    purple400: string;
  };

  font: {
    small: string;
    normal: string;
  };

  fontWeight: {
    normal: number;
    bold: number;
  };

  radius: {
    tiny: string;
    small: string;
    normal: string;
    big: string;
  };

  media: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
}

export type { ITheme };