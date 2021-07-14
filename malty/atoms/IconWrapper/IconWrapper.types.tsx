import { MouseEventHandler } from 'react';

export interface IconWrapperInterface extends React.HTMLAttributes<SVGElement> {
  color: Colors;
  size: SizesTypes;
  viewBox?: string;
  onIconClick?: MouseEventHandler<SVGElement>;
}

export enum Sizes {
  Small = '16',
  Medium = '24',
  Large = '32'
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
