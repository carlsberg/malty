import { SpaceProps } from '@carlsberggbs/malty.utils.space';
import { ReactElement } from 'react';

interface BaseIconSVGProps {
  ariaLabel?: never;
  onClick?: never;
}

interface BaseIconButtonProps {
  ariaLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export type BaseIconProps = (BaseIconSVGProps | BaseIconButtonProps) &
  SpaceProps & {
    color?: IconColor;
    size?: IconSize;
    viewBox?: string;
    dataTestId?: string;
    children?: ReactElement;
    className?: string;
  };

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
  Disabled = 'disabled',
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

export type CloneIconProps = {
  icon?: ReactElement;
} & BaseIconProps;
