export interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: Size;
  align?: Align;
  color?: Color;
  children: string | JSX.Element;
}

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  XLarge = 'xlarge',
  Huge = 'huge',
  Hero = 'hero',
  Display = 'display'
}
export enum Align {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
export enum Color {
  White = 'white',
  Primary = 'primary',
  Support = 'support'
}
