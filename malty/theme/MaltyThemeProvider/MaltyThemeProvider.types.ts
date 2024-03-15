import { ReactNode } from 'react';

export interface MaltyThemeProviderProps {
  theme: ThemeName;
  children: ReactNode;
}

export type ThemeName = 'cadi' | 'carlsberg' | 'global' | 'lbc';

// export interface Theme {

// }

// export interface GlobalTokens {

// }

// export interface SemanticTokens {

// }
