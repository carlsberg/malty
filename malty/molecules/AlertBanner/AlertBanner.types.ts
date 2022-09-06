export interface AlertBannerProps {
  alerts: AlertBannerI[];
  breakpoint?: string;
  animation?: AnimatedProps;
}

export interface AnimatedProps {
  showAnimations: boolean;
  triggerYPosition: number;
  isBannerTextCompressed: boolean;
  toggleBannerTextCompress: (arg0: boolean) => void;
}

export interface AlertBannerI {
  type: AlertBannerType;
  message: string;
  icon?: boolean;
  action?: () => void;
  actionName?: string;
  dismiss?: () => void;
  dataQaId?: string;
}

export enum AlertBannerType {
  Information = 'information',
  Warning = 'warning',
  Error = 'error'
}
