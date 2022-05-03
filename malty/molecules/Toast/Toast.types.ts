export interface ToastProps {
  message: string;
  color: ToastColor;
  showCloseIcon?: boolean;
  onClose?: (state: boolean) => void;
  onCustomAction?: () => void;
  customActionText?: string;
  autoHideDuration?: number;
  dataQaId?: string;
}

export enum ToastColor {
  Notification = 'notification-strong',
  Fail = 'fail'
}
