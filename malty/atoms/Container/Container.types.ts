export interface ContainerProps {
  padding?: ContainerSizeType;
  children?: string | JSX.Element;
}

export enum ContainerSizeType {
  None = 'None',
  Micro = 'Micro',
  Tiny = 'Tiny',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}
