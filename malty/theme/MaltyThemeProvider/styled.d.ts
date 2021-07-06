import 'styled-components';

declare module 'styled-components' {
  export type ThemeName = 'defaultTheme' | 'baltikaTheme';
  export interface DefaultTheme {
    [key: ThemeName]: {
      themeColors: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      colors: {
        [key: string]: string;
        white: string;
        supportDark: string;
        support: string;
        supportLight: string;
        disabled: string;
        black: string;
        transparent: string;
        fail: string;
      };
      informationColors: {
        [key: string]: string;
        new: string;
        live: string;
        multiple: string;
        hold: string;
        archive: string;
        disable: string;
        active: string;
        prospect: string;
        parked: string;
        indirect: string;
        wholesaler: string;
        closed: string;
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
    };
  }
}
