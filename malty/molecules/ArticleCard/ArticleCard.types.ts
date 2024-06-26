import { ButtonColor, ButtonStyle } from '@carlsberggbs/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggbs/malty.atoms.card';
import { SpaceProps } from '@carlsberggbs/malty.utils.space';

export interface ArticleCardProps extends SpaceProps {
  cardStyle?: CardStyle;
  orientation?: CardOrientation;
  onCardClick?: () => void;
  title: string;
  description?: string;
  date?: string;
  imageSrc: string;
  dataTestId?: string;
  imageHeight?: string;
  imageWidth?: string;
  action?: {
    variant: ButtonStyle;
    color: ButtonColor;
    label: string;
    onClick: () => void;
  };
}
