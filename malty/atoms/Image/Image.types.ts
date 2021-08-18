export interface ImageProps {
  url: string;
  cover?: boolean;
  border?: Position;
  gradient?: Position;
  alt?: string;
}

export enum Position {
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom',
  Left = 'Left'
}
