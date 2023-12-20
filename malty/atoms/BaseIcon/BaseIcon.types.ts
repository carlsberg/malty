import { SpaceProps } from '@carlsberggroup/malty.utils.space';
import { ReactElement } from 'react';

export interface BaseIconProps extends React.HTMLAttributes<SVGElement>, SpaceProps {
  color?: IconColor;
  size?: IconSize;
  viewBox?: string;
  dataTestId?: string;
  children?: ReactElement;
}

// TODO: check if colors and sizes should be exported also on each Icon since if I want to use it I will have to import from baseIcon and is not ideal
export enum IconColor {
  Primary = 'themePrimary',
  Secondary = 'themeSecondary',
  Tertiary = 'themeTertiary',
  DigitalBlack = 'digital-black',
  White = 'white',
  Support20 = '20',
  Support40 = '40',
  Support60 = '60',
  Support80 = '80',
  Support100 = '100',
  Notification = 'notification-strong',
  NotificationLight = 'notification-light',
  Alert = 'alert-strong',
  AlertLight = 'alert-light',
  Success = 'success',
  SuccessLight = 'success-light',
  Fail = 'fail',
  FailLight = 'fail-light',
  DisableDark = 'disable-dark-theme',
  DisableLight = 'disable-light-theme'
}

export enum IconSize {
  ExtraSmall = 'xs',
  Small = 's',
  MediumSmall = 'ms',
  Medium = 'm',
  Large = 'l',
  ExtraLarge = 'xl'
}

export type StyledBaseIconProps = {
  $color: string;
  $size: IconSize;
} & SpaceProps;
