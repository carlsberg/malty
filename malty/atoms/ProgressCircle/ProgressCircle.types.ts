export interface ProgressCircleProps {
  foregroundColor?: ForegroundCircleColor;
  displayPercentage?: boolean;
  percentage: number;
  percentagePosition?: PercentagePosition;
  roundMethod?: RoundMethod;
}

export enum RoundMethod {
  Down = 'down',
  Up = 'up'
}

export enum PercentagePosition {
  Left = 'left',
  Right = 'right'
}

export enum ForegroundCircleColor {
  Close = 'close',
  DigitalBlack = 'digital-black',
  Hold = 'hold',
  Live = 'live',
  Multiple = 'multiple',
  Notification = 'notification',
  Parked = 'parked',
  Support80 = 'support80',
  Support100 = 'support100',
  ThemePrimary = 'themePrimary',
  ThemeSecondary = 'themeSecondary',
  Update = 'update'
}
