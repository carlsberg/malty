export interface TooltipProps {
  position: Position;
  isOpen?: boolean;
  toggle?: Toggle;
  anchor?: string;
  children: string | JSX.Element;
}

export enum Position {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}

export enum Toggle {
  Click = 'click',
  Hover = 'hover',
  Persist = 'persist'
}
