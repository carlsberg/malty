export interface TooltipProps {
  position: TooltipPosition;
  toggle: TooltipToggle;
  anchorRef: React.RefObject<HTMLElement>;
  isDark?: boolean;
  dataTestId?: string;
  autoHideDuration?: number;
  onClose?: () => void;
  children: string | JSX.Element;
}

export type TooltipStaticProps = {
  startTooltipTimer: (anchorRef?: React.RefObject<HTMLElement>) => void;
  openTooltip: (anchorRef?: React.RefObject<HTMLElement>) => void;
  closeTooltip: (anchorRef?: React.RefObject<HTMLElement>) => void;
};

export type TooltipType = React.FC<TooltipProps> & TooltipStaticProps;

export type UseTooltipProps = {
  toggleType: TooltipToggle;
  anchorRef: React.RefObject<HTMLElement>;
  autoHideDuration?: number;
  onClose?: () => void;
};

export enum TooltipPosition {
  TopCenter = 'top-center',
  TopLeft = 'top-left',
  TopRight = 'top-right',
  Right = 'right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  Left = 'left'
}

export enum TooltipToggle {
  Click = 'click',
  Hover = 'hover',
  Event = 'event'
}
