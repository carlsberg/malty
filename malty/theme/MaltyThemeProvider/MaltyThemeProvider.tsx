import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MaltyThemeProviderProps } from './MaltyThemeProvider.types';
import { createTheme } from './theme2';
import { TypographyProvider } from './TypographyProvider';

export const MaltyThemeProvider = ({ colors, typography, sizes, children }: MaltyThemeProviderProps) => {
  const theme = createTheme({ colors });

  console.log('FINAL THEME', theme);

  return (
    <ThemeProvider theme={theme}>
      <TypographyProvider />
      {children}
    </ThemeProvider>
  );
};
