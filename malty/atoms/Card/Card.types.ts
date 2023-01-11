export interface CardProps {
  style: CardStyle;
  orientation: CardOrientation;
  selected: boolean;
  cardHero?: React.ReactNode | JSX.Element;
  cardBody?: React.ReactNode | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export enum CardStyle {
  Plain = 'plain',
  Outlined = 'outlined',
  Shadowed = 'shadowed',
}
export enum CardOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
}
