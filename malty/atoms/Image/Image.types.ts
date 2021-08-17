export interface ImageProps {
  url: string;
  cover?: boolean;
  border?: Position;
  gradient?: Position;
}

export enum Position {
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom',
  Left = 'Left'
}
