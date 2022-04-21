import { IconName } from '@carlsberggroup/malty.atoms.icon';

export interface AlertProps {
  action?: boolean;
  icon?: IconName;
  size?: AlertSize;
  color: AlertColor;
  dataQaId?: string;
  firstAction?: () => void;
  firstActionText?: string;
  secondAction?: () => void;
  secondActionText?: string;
  message: string;
  title?: string;
}

export enum AlertColor {
  Notification = 'notification-strong',
  NotificationLight = 'notification-light',
  Alert = 'alert-strong',
  AlertLight = 'alert-light',
  Success = 'success',
  SuccessLight = 'success-light',
  Fail = 'fail',
  FailLight = 'fail-light'
}

export enum AlertSize {
  Small = 'small',
  Medium = 'medium'
}
