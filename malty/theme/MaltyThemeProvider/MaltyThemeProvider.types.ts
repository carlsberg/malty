import { ReactNode } from 'react';

export interface MaltyThemeProviderProps {
  theme: ThemeName;
  children: ReactNode;
}

export type ThemeName = 'cadi' | 'carlsberg' | 'global' | 'lbc';
