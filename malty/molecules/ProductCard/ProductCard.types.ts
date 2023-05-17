import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { IconColor, IconName } from '@carlsberggroup/malty.atoms.icon';
import { PillProps } from '@carlsberggroup/malty.atoms.pill';
import { SelectOptionsType } from '@carlsberggroup/malty.atoms.select';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { AlertInlineProps } from '@carlsberggroup/malty.molecules.alert-inline';
import { MRO } from '@carlsberggroup/malty.molecules.sku';

export interface ProductCardProps {
  productCardStyle?: CardStyle;
  orientation?: CardOrientation;
  onProductClick?: () => void;
  onInputQuantityChange?: (value: number) => void;
  onSelectQuantityChange?: (value: SelectOptionsType[]) => void;
  onFavoriteClick?: (favorite: boolean) => void;
  title: string;
  sku?: string;
  mro?: MRO;
  productsCardsAlerts?: AlertInlineProps[];
  maxQuantity?: number;
  quantitySelectOptions?: SelectOptionsType[];
  hideQuantityInput?: boolean;
  discountPill?: PillProps;
  promoPill?: PillProps;
  cartPill?: PillProps;
  favoriteIconColor?: IconColor;
  stock?: {
    label: string;
    labelColor?: TextColor;
    stockColor?: TextColor;
    availability?: string;
  };
  loyalty?: {
    label: string;
    imageSrc: string;
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
  initialQuantityValue?: number;
}
