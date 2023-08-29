export interface AlertBannerProps {
  alerts: AlertBannerI[];
  breakpoint?: string;
  animation?: AnimatedProps;
  onActiveAlertChange?: (currentAlert: AlertBannerI) => void;
}

export interface AnimatedProps {
  showAnimations: boolean;
  triggerYPosition: number;
  isBannerTextCompressed: boolean;
  toggleBannerTextCompress: (arg0: boolean) => void;
}

export interface AlertBannerI {
  eid: string;
  type: AlertBannerType;
  message: string;
  icon?: boolean;
  action?: () => void;
  actionName?: string;
  dismissible: boolean;
  onDismiss?: () => void;
  dataQaId?: string;
}

export enum AlertBannerType {
  Information = 'information',
  Warning = 'warning',
  Error = 'error',
  Success = 'success'
}
