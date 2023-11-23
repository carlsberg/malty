import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface PaddedContainerProps extends SpaceProps {
  padding?: PaddedContainerSize;
  children?: string | JSX.Element;
}

export enum PaddedContainerSize {
  None = 'None',
  Micro = 'Micro',
  Tiny = 'Tiny',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}
