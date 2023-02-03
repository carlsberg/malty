import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';

export interface ProductCardProps {
  productCardStyle?: CardStyle;
  orientation?: CardOrientation;
  onCardClick?: () => void;
  onQuantityChange?: (value: string) => void;
  title: string;
  sku?: string;
  loyalty?: {
    label: string;
    icon: IconName;
  };
  price?: {
    label: string;
    color?: TextColor;
    style: TextStyle;
  };
  discountPrice?: {
    label: string;
    color?: TextColor;
    style: TextStyle;
  };

  imageSrc: string;
  dataTestId?: string;
  imageHeight?: string;
  imageWidth?: string;
  action?: {
    variant: ButtonStyle;
    color?: ButtonColor;
    label?: string;
    icon?: IconName;
    onClick: () => void;
  };
}
