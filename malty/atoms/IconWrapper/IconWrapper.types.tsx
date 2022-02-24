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
  Small = 's',
  Medium = 'm',
  Large = 'l'
}
