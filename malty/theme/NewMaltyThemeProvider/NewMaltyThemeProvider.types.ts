import { ReactNode } from 'react';
import { DefaultTheme } from 'styled-components';

export interface NewMaltyThemeProviderProps {
  theme: DefaultTheme;
  children: ReactNode;
}
