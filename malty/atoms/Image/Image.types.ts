export interface ImageProps {
  src: string;
  cover?: boolean;
  border?: ImageEffectPosition;
  gradient?: ImageEffectPosition;
  overlay?: ImageOverlay;
  alt?: string;
  height?: string;
  width?: string;
  children?: string | JSX.Element;
}

export enum ImageEffectPosition {
  Top = 'Top',
  Right = 'Right',
  Bottom = 'Bottom',
  Left = 'Left'
}

export enum ImageOverlay {
  Overlay10 = '10',
  Overlay25 = '25',
  Overlay50 = '50',
  Overlay75 = '75',
  Overlay90 = '90'
}
