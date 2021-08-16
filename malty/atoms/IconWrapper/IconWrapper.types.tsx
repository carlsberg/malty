import { MouseEventHandler } from 'react';

export interface IconWrapperInterface extends React.HTMLAttributes<SVGElement> {
  color: Colors;
  size: SizesTypes;
  viewBox?: string;
  onClick?: MouseEventHandler<SVGElement>;
}

export enum Colors {
  Primary = 'Primary',
  White = 'White'
}

export enum SizesTypes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}
