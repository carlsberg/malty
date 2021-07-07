import { ReactNode } from 'react';

export interface MaltyThemeProviderProps {
  theme: ThemeName;
  children: ReactNode;
}

export type ThemeName = 'defaultTheme' | 'baltikaTheme';
