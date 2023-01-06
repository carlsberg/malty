export interface CardProps {
  style: CardStyle;
  orientation: CardOrientation;
  selected: boolean;
  cardHero?: React.ReactNode | JSX.Element;
  cardBody?: React.ReactNode | JSX.Element;
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
