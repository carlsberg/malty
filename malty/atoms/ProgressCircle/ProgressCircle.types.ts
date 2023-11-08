import { SpaceProps } from '@carlsberggroup/malty.utils.space';

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

export enum PercentagePosition {
  Left = 'left',
  Right = 'right'
}

export interface PieChartProps {
  diameter: number;
  percentage: number;
}

export interface PiePercentageAndLabelProps {
  errorLabel: string;
  percentage: number;
}

export interface ProgressCircleProps extends SpaceProps {
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

export interface RoundPercentageProps {
  percentage: number;
  roundMethod: RoundMethod;
}

export interface SegmentColorProps {
  foregroundColor: ForegroundCircleColor;
}
