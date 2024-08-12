import { TypographyProvider } from '@carlsberg/malty.theme.malty-theme-provider';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './defaultTheme';
import { NewMaltyThemeProviderProps } from './NewMaltyThemeProvider.types';

export const NewMaltyThemeProvider = ({ theme, children }: NewMaltyThemeProviderProps) => {
  const finalTheme = theme ?? defaultTheme;

  return (
    <ThemeProvider theme={finalTheme}>
      <TypographyProvider />
      {children}
    </ThemeProvider>
  );
};
