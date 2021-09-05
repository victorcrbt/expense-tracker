import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      lightPrimary: string;
      primary: string;
      darkPrimary: string;

      lightSecondary: string;
      secondary: string;
      darkSecondary: string;

      success: string;
      warning: string;
      info: string;
      danger: string;

      white: string;
      lightGray: string;
      gray: string;
      darkGray: string;
      black: string;
    };

    fontSize: {
      paragraph: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  }
}
