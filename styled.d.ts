import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
      primary: string;
      white: string;
      support: string;
      disabled: string;
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
