import { SpaceProps } from '@carlsberggbs/malty.utils.space';

export interface CardProps extends SpaceProps {
  cardStyle?: CardStyle;
  orientation?: CardOrientation;
  selected?: boolean;
  cardHero?: React.ReactNode | JSX.Element;
  cardBody?: React.ReactNode | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  dataTestId?: string;
  disabled?: boolean;
}

export enum CardStyle {
  Plain = 'plain',
  Outlined = 'outlined',
  Shadowed = 'shadowed'
}
export enum CardOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait'
}

export type StyledCardContainerProps = {
  orientation: CardOrientation;
  selected: boolean;
  cardStyle: CardStyle;
  hover: boolean;
  disabled?: boolean;
} & SpaceProps;
