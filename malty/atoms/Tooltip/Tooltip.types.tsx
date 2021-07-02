export interface TooltipProps {
  content: string | JSX.Element;
  children: string | JSX.Element;
  position: Position;
  isOpen: boolean;
}

export enum Position {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left'
}
