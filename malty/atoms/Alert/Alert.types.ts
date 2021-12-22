export interface AlertProps {
  type?: AlertType;
  label: string | JSX.Element;
  action?: boolean;
  icon?: boolean;
  dismiss?: (state: boolean) => void;
  heightSize?: AlertHeightSizeTypes;
  color: AlertBackgroundColor;
  dataQaId?: string;
  firstAction?: () => void;
  firstActionText?: string;
  secondAction?: () => void;
  secondActionText?: string;
}

export enum AlertType {
  Banner = 'banner',
  InLine = 'inline',
  Toast = 'toast'
}

export enum AlertBackgroundColor {
  Notification = 'notification',
  Alert = 'alert',
  Success = 'success',
  Fail = 'fail'
}

export enum AlertHeightSizeTypes {
  Small = 'small',
  Medium = 'medium'
}
