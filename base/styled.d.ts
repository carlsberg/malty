import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
      primary: string;
      white: string;
      supportDark: string;
      support: string;
      supportLight: string;
      disabled: string;
      black: string;
      transparent: string;
      fail: string;
    };
    fontSizes: {
      [key: string]: string;
      small: string;
      medium: string;
      large: string;
    };
    fontFamily: {
      headings: string;
      text: string;
    };
  }
}
