import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { MaltyThemeProviderProps } from './MaltyThemeProvider.types';
import { baltikaTheme, cadiTheme, carlsbergTheme, globalTheme, lbcTheme } from './theme';

export const MaltyThemeProvider = ({ theme = 'global', children }: MaltyThemeProviderProps) => {
  let selectedTheme: DefaultTheme | null = null;
  switch (theme) {
    case 'carlsberg':
      selectedTheme = carlsbergTheme;
      break;
    case 'baltika':
      selectedTheme = baltikaTheme;
      break;
    case 'cadi':
      selectedTheme = cadiTheme;
      break;
    case 'lbc':
      selectedTheme = lbcTheme;
      break;
    default:
      selectedTheme = globalTheme;
      break;
  }
  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};
