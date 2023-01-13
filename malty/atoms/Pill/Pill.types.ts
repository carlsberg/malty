import { IconName } from '@carlsberggroup/malty.atoms.icon';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  icon?: IconName;
  color?: PillColor;
  size?: PillSize;
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
  alertStrong = 'alert-strong',
  Fail = 'fail',
  NotificationStrong = 'notification-strong'
}

export interface UsePillStylesProps {
  size: PillSize;
}

export interface IconTextColorProps {
  color: PillColor;
}
