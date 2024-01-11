import { SpaceProps } from '@carlsberggroup/malty.utils.space';
import { ReactElement } from 'react';

export interface AlertInlineProps extends SpaceProps {
  icon?: ReactElement;
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
