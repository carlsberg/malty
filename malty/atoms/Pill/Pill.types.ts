import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface PillProps extends React.HTMLAttributes<HTMLElement>, SpaceProps {
  text?: string;
  icon?: IconName;
  type?: PillType;
  size?: PillSize;
  badgeMode?: boolean;
  dataTestId?: string;
  isUppercase?: boolean;
}

export enum PillSize {
  ExtraSmall = 'ExtraSmall',
  Small = 'Small',
  Medium = 'Medium'
}

export enum PillType {
  Primary = 'primary',
  Secondary = 'secondary',
  Archive = 'support40',
  Success = 'success',
  AlertStrong = 'alert-strong',
  Fail = 'fail',
  NotificationStrong = 'notification-strong',
  AlertLight = 'alert-light',
  NotificationLight = 'notification-light',
  SuccessLight = 'success-light',
  Disabled = 'disable-light-theme'
}

export interface UsePillStylesProps {
  size: PillSize;
}

export interface IconTextColorProps {
  type: PillType;
}
