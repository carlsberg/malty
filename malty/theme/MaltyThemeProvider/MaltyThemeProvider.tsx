import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { MaltyThemeProviderProps } from './MaltyThemeProvider.types';
import { baltikaTheme, defaultTheme } from './theme';

export const MaltyThemeProvider = ({ theme = 'defaultTheme', children }: MaltyThemeProviderProps) => {
  let selectedTheme: DefaultTheme | null = null;
  switch (theme) {
    case 'baltikaTheme':
      selectedTheme = baltikaTheme;
      break;

    default:
      selectedTheme = defaultTheme;
      break;
  }
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};
