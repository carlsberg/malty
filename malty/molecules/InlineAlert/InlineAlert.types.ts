import { IconName } from '@carlsberggroup/malty.atoms.icon';

export interface InlineAlertProps {
  icon?: IconName;
  size?: InlineAlertSize;
  color: InlineAlertColor;
  dataQaId?: string;
  firstAction?: () => void;
  firstActionText?: string;
  secondAction?: () => void;
  secondActionText?: string;
  message: string;
  title?: string;
}

export enum InlineAlertColor {
  Notification = 'notification-strong',
  NotificationLight = 'notification-light',
  Alert = 'alert-strong',
  AlertLight = 'alert-light',
  Success = 'success',
  SuccessLight = 'success-light',
  Fail = 'fail',
  FailLight = 'fail-light'
}

export enum InlineAlertSize {
  Small = 'small',
  Medium = 'medium'
}
