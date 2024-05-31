import { SpaceProps } from '@carlsberggbs/malty.utils.space';

export interface ToastProps extends SpaceProps {
  message: string;
  color: ToastColor;
  showCloseIcon?: boolean;
  onClose?: () => void;
  onCustomAction?: () => void;
  customActionText?: string;
  autoHideDuration?: number;
  dataQaId?: string;
}

export enum ToastColor {
  Notification = 'notification-strong',
  Fail = 'fail'
}
