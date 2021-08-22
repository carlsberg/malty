export interface ImageProps {
  src: string;
  cover?: boolean;
  border?: Position;
  gradient?: Position;
  overlay?: Overlay;
  alt?: string;
  height?: string;
  width?: string;
}

export enum Position {
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom',
  Left = 'Left'
}

export enum Overlay {
  Overlay10 = '10',
  Overlay25 = '25',
  Overlay50 = '50',
  Overlay75 = '75',
  Overlay90 = '90'
}
