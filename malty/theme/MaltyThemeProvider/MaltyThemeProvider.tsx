import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme as themeObject } from '../../theme';
import { MaltyThemeProviderProps } from './MaltyThemeProvider.types';

export const MaltyThemeProvider = ({ theme = 'defaultTheme', children }: MaltyThemeProviderProps) => {
  const currentTheme = themeObject[theme];
  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
