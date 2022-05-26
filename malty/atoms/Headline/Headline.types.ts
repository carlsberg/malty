export interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headlineStyle?: HeadlineStyle;
  align?: HeadlineAlign;
  color?: HeadlineColor;
  as?: React.ElementType;
  children: string | JSX.Element;
}

export enum HeadlineStyle {
  Display = 'display',
  Hero = 'hero',
  Huge = 'huge',
  Big = 'big',
  Large = 'large',
  MediumLarge = 'medium-large',
  Medium = 'medium'
}
export enum HeadlineAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
export enum HeadlineColor {
  ThemePrimary = 'theme-primary',
  DigitalBlack = 'digital-black',
  White = 'white'
}
