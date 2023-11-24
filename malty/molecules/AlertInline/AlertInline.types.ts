import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface AlertInlineProps extends SpaceProps {
  icon?: IconName;
  size?: AlertInlineSize;
  color: AlertInlineColor;
  dataQaId?: string;
  firstAction?: () => void;
  firstActionText?: string;
  secondAction?: () => void;
  secondActionText?: string;
  message: string;
  title?: string;
}

export enum AlertInlineColor {
  Notification = 'notification-strong',
  NotificationLight = 'notification-light',
  Alert = 'alert-strong',
  AlertLight = 'alert-light',
  Success = 'success',
  SuccessLight = 'success-light',
  Fail = 'fail',
  FailLight = 'fail-light'
}

export enum AlertInlineSize {
  Compact = 'small',
  Default = 'medium'
}
