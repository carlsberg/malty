import { MouseEventHandler } from 'react';

export interface IconWrapperProps extends React.HTMLAttributes<SVGElement> {
  color: IconColor;
  size: IconSize;
  viewBox?: string;
  onClick?: MouseEventHandler<SVGElement>;
}

export enum IconColor {
  Primary = 'digital-black',
  White = 'white'
}

export enum IconSize {
  ExtraSmall = 'xs',
  Small = 's',
  MediumSmall = 'ms',
  Medium = 'm',
  Large = 'l',
  ExtraLarge = 'xl'
}
