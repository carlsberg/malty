import { IconName } from '@carlsberggroup/malty.atoms.icon';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  icon?: IconName;
  color?: PillColor;
  size?: PillSize;
  badgeMode?: boolean;
  dataTestId?: string;
}

export enum PillSize {
  ExtraSmall = 'ExtraSmall',
  Small = 'Small',
  Medium = 'Medium'
}

export enum PillColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Archive = 'support40',
  Success = 'success',
  AlertStrong = 'alert-strong',
  Fail = 'fail',
  NotificationStrong = 'notification-strong',
  AlertLight = 'alert-light',
  NotificationLight = 'notification-light',
  SuccessLight = 'success-light'
}

export interface UsePillStylesProps {
  size: PillSize;
}

export interface IconTextColorProps {
  color: PillColor;
}
