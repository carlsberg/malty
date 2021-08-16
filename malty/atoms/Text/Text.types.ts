export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: Size;
  weight?: Weight;
  align?: Align;
  color?: Color;
  children: string | JSX.Element;
}

export enum Size {
  Medium = 'medium',
  MediumSmall = 'medium-small',
  Small = 'small'
}
export enum Weight {
  Lighter = 'lighter',
  Normal = 'normal',
  Bold = 'bold'
}
export enum Align {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
export enum Color {
  White = 'white',
  Default = 'default'
}
