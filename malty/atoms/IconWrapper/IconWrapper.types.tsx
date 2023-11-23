import { SpaceProps } from '@carlsberggroup/malty.utils.space';
import { MouseEventHandler } from 'react';

export interface IconWrapperProps extends React.HTMLAttributes<SVGElement>, SpaceProps {
  color: IconColor;
  size: IconSize;
  viewBox?: string;
  onClick?: MouseEventHandler<SVGElement>;
  name?: string;
}

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

export interface UseIconColorProps {
  color: IconColor;
}

export interface UseNumSizeProps {
  size: IconSize;
}

export type StyledIconProps = {
  color: string;
  size: string;
} & SpaceProps;
