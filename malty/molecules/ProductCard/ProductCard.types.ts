import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { PillProps } from '@carlsberggroup/malty.atoms.pill';
import { SelectOptionsType } from '@carlsberggroup/malty.atoms.select';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { AlertInlineColor } from '@carlsberggroup/malty.molecules.alert-inline';

export interface ProductCardProps {
  productCardStyle?: CardStyle;
  orientation?: CardOrientation;
  onCardClick?: () => void;
  onInputQuantityChange?: (value: string) => void;
  onSelectQuantityChange?: (value: SelectOptionsType[]) => void;
  onFavoriteClick?: (favorite: boolean) => void;
  title: string;
  sku?: string;
  alertMessage?: string;
  alertColor?: AlertInlineColor;
  maxQuantity?: number;
  quantitySelectOptions?: SelectOptionsType[];
  hideQuantityInput?: boolean;
  discountPill?: PillProps;
  promoPill?: PillProps;
  cartPill?: PillProps;
  stock?: {
    label: string;
    labelColor?: TextColor;
    stockColor?: TextColor;
  };
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
