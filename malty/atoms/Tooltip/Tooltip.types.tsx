export interface TooltipProps {
  position: TooltipPosition;
  isOpen?: boolean;
  toggle?: TooltipToggle;
  anchor?: string;
  children: string | JSX.Element;
}

export enum TooltipPosition {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

export enum TooltipToggle {
  Click = 'click',
  Hover = 'hover',
  Persist = 'persist'
}
