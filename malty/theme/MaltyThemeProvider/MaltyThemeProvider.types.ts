export interface MaltyThemeProviderProps {
  theme: ThemeName;
  children: JSX.Element | JSX.Element[];
}

export type ThemeName = 'defaultTheme' | 'baltikaTheme';
