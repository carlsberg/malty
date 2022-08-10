export interface AlertBannerProps {
  alerts: AlertBannerI[];
  breakpoint?: number;
  animation?: AnnimatedProps;
}

export interface AnimatedProps {
  showAnimation: boolean;
  triggerYPosition: number;
  currentYOffset: number;
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
