export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: Size;
  weight?: Weight;
  align?: Align;
  color?: Color;
  content?: string;
}

export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
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
