export interface PaddedContainerProps {
  padding?: PaddedContainerSizeType;
  children?: string | JSX.Element;
}

export enum PaddedContainerSizeType {
  None = 'None',
  Micro = 'Micro',
  Tiny = 'Tiny',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}
