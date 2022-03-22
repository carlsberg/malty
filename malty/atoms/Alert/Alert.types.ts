export interface AlertProps {
  type?: AlertType;
  action?: boolean;
  icon?: boolean;
  dismiss?: (state: boolean) => void;
  heightSize?: AlertSize;
  color: AlertColor;
  dataQaId?: string;
  firstAction?: () => void;
  firstActionText?: string;
  secondAction?: () => void;
  secondActionText?: string;
  children: string | JSX.Element;
  autoHideDuration?: number;
  onHideToast?: () => void;
}

export enum AlertType {
  Banner = 'banner',
  InLine = 'inline',
  Toast = 'toast'
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
