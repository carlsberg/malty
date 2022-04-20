export interface AlertProps {
  action?: boolean;
  icon?: boolean;
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
  Notification = 'notification',
  Alert = 'alert',
  Success = 'success',
  Fail = 'fail'
}

export enum AlertSize {
  Small = 'small',
  Medium = 'medium'
}
