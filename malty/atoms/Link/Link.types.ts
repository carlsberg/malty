import { ElementType, ReactNode } from 'react';

export interface LinkProps<Component extends ElementType> {
  as?: Component;
  children?: ReactNode;
  color?: LinkColor;
  disabled?: boolean;
  linkStyle?: LinkStyle;
  dataTestId?: string;
}

export enum LinkColor {
  DigitalBlack = 'digital-black',
  White = 'white',
  Support20 = '20',
  Support40 = '40',
  Support60 = '60',
  Support80 = '80',
  Support100 = '100',
  AlertLight = 'alert-light',
  AlertStrong = 'alert-strong',
  DisableLightTheme = 'disable-light-theme',
  DisableDarkTheme = 'disable-dark-theme',
  Fail = 'fail',
  FailLight = 'fail-light',
  NotificationLight = 'notification-light',
  NotificationStrong = 'notification-strong',
  Success = 'success',
  SuccessLight = 'success-light',
  Primary = 'Primary'
}

export enum LinkStyle {
  MediumBold = 'medium_bold',
  MediumDefault = 'medium_default',
  MediumSmallBold = 'medium-small_bold',
  MediumSmallDefault = 'medium-small_default',
  SmallBold = 'small_bold',
  SmallDefault = 'small_default',
  TinyBold = 'tiny_bold',
  TinyDefault = 'tiny_default',
  MicroBold = 'micro_bold',
  MicroDefault = 'micro_default'
}
