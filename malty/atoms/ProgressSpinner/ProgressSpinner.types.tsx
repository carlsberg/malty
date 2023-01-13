export interface ProgressSpinnerProps {
  status?: ProgressSpinnerStatus;
  dataQaId?: string;
  negative?: boolean;
  color?: ProgressSpinnerColor;
}

export enum ProgressSpinnerStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure',
}

export enum ProgressSpinnerSize {
  Small = 'Small',
  Medium = 'Medium',
}

export enum ProgressSpinnerColor {
  DigitalBlack = 'digital-black',
  ThemePrimary = 'themePrimary',
  ThemeSecondary = 'themeSecondary',
  ThemeTertiary = 'themeTertiary',
}
