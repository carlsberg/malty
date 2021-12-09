export interface AlertProps {
  type?: AlertType;
  label: string | JSX.Element;
  action?: boolean;
  icon?: boolean;
  dismiss?: (state: boolean) => void;
  heightSize?: HeightSizeTypes;
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

export enum HeightSizeTypes {
  Small = 'small',
  Medium = 'medium'
}
