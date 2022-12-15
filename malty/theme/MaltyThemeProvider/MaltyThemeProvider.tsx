import React, { useLayoutEffect } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { MaltyThemeProviderProps } from './MaltyThemeProvider.types';
import { cadiTheme, carlsbergTheme, globalTheme, lbcTheme } from './theme';
import { TypographyProvider } from './TypographyProvider';

export const MaltyThemeProvider = ({ theme = 'global', children }: MaltyThemeProviderProps) => {
  let selectedTheme: DefaultTheme;
  switch (theme) {
    case 'cadi':
      selectedTheme = cadiTheme;
      break;
    case 'carlsberg':
      selectedTheme = carlsbergTheme;
      break;
    case 'lbc':
      selectedTheme = lbcTheme;
      break;
    default:
      selectedTheme = globalTheme;
      break;
  }

  useLayoutEffect(() => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', 'font');
    link.setAttribute('href', 'https://cdn.carlsberggroup.com/fonts/montserrat/Montserrat-VariableFont_wght.ttf');
    link.setAttribute('crossorigins', '*');
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeProvider theme={selectedTheme}>
      <TypographyProvider />
      {children}
    </ThemeProvider>
  );
};
