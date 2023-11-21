export interface LoadingProps {
  text?: string;
  size?: LoadingSize;
  status?: LoadingStatus;
  dataQaId?: string;
  negative?: boolean;
  color?: LoadingColor;
  zIndex?: number;
}

export enum LoadingSize {
  Small = 'Small',
  Medium = 'Medium'
}

export enum LoadingStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}

export enum LoadingColor {
  DigitalBlack = 'digital-black',
  ThemePrimary = 'themePrimary',
  ThemeSecondary = 'themeSecondary',
  ThemeTertiary = 'themeTertiary'
}
