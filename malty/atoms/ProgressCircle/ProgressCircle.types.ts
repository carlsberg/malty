import { DefaultTheme } from 'styled-components';

export interface ProgressCircleProps {
  foregroundColor?: ForegroundCircleColor;
  displayPercentage?: boolean;
  errorLabel?: string;
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
  percentage: number;
  errorLabel: string;
}

export interface SegmentColorProps {
  foregroundColor: ForegroundCircleColor;
  theme: DefaultTheme;
}
