import { ReactNode } from 'react';
import { DefaultThemeV2 } from 'styled-components';

export interface NewMaltyThemeProviderProps {
  theme?: DefaultThemeV2;
  children: ReactNode;
}
