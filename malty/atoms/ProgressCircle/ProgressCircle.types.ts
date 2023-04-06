export interface ProgressCircleProps {
  displayPercentage?: boolean;
  errorLabel?: string;
  foregroundColor?: ForegroundCircleColor;
  percentage: number;
  percentagePosition?: PercentagePosition;
  roundMethod?: RoundMethod;
}

export enum RoundMethod {
  Down = 'down',
  Round = 'round',
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

export interface RoundPercentageProps {
  percentage: number;
  roundMethod: RoundMethod;
}

export interface DegreeValueAndLabelProps {
  errorLabel: string;
  percentage: number;
}

export interface SegmentColorProps {
  foregroundColor: ForegroundCircleColor;
}
