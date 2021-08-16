export interface TooltipProps {
  position: Position;
  isOpen: boolean;
  children: string | JSX.Element;
}

export enum Position {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}
