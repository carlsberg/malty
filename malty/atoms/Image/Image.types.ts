export interface ImageProps {
  url: string;
  cover?: boolean;
  border?: Position;
  gradient?: Position;
  overlay?: number;
  alt?: string;
}

export enum Position {
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom',
  Left = 'Left'
}
