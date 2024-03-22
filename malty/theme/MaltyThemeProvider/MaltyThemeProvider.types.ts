import { ReactNode } from 'react';

export interface MaltyThemeProviderProps {
  colors?: unknown;
  sizes?: unknown;
  typography?: unknown;
  children: ReactNode;
}

export type ThemeName = 'cadi' | 'carlsberg' | 'global' | 'lbc';
