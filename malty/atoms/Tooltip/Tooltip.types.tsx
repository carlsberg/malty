export interface TooltipProps {
  isOpen?: boolean;
  placement: TooltipPlacement;
  toggle?: TooltipToggle;
  triggerComponent: (setTriggerElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => React.ReactNode;
  isDark?: boolean;
  dataTestId?: string;
  autoHideDuration?: number;
  onClose?: () => void;
  tooltipId: string;
  children: string | JSX.Element;
  positionStrategy?: TooltipPositionStrategy;
}

export type TooltipStaticProps = {
  startTooltipTimer: (toolipId: string) => void;
  openTooltip: (toolipId: string) => void;
  closeTooltip: (toolipId: string) => void;
};

export type TooltipType = React.FC<TooltipProps> & TooltipStaticProps;

export type UseTooltipProps = {
  positionStrategy?: TooltipPositionStrategy;
  isOpenProp?: boolean;
  toggleType: TooltipToggle;
  autoHideDuration?: number;
  onClose?: () => void;
  placement: TooltipPlacement;
  tooltipId: string;
};

export enum TooltipPositionStrategy {
  Absolute = 'absolute',
  Fixed = 'fixed'
}

export enum TooltipPlacement {
  Auto = 'auto',
  AutoStart = 'auto-start',
  AutoEnd = 'auto-end',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  RightStart = 'right-start',
  RightEnd = 'right-end',
  LeftStart = 'left-start',
  LeftEnd = 'left-end',
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

export enum TooltipToggle {
  Click = 'click',
  Hover = 'hover',
  Event = 'event'
}
