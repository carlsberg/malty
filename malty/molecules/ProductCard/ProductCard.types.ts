import { IconColor } from '@carlsberggbs/malty.atoms.base-icon';
import { CardOrientation, CardStyle } from '@carlsberggbs/malty.atoms.card';
import { PillProps } from '@carlsberggbs/malty.atoms.pill';
import { PriceProps } from '@carlsberggbs/malty.atoms.price';
import { SelectOptionsType } from '@carlsberggbs/malty.atoms.select';
import { AlertInlineProps } from '@carlsberggbs/malty.molecules.alert-inline';
import { ActionButton, ActionQuantityInput, Stock } from '@carlsberggbs/malty.molecules.product-quantity-actions';
import { MRO } from '@carlsberggbs/malty.molecules.sku';
import { SpaceProps } from '@carlsberggbs/malty.utils.space';

export interface ProductCardProps extends SpaceProps {
  productCardStyle?: CardStyle;
  orientation?: CardOrientation;
  onProductClick?: () => void;
  onSelectQuantityChange?: (value: SelectOptionsType[]) => void;
  onFavoriteClick?: (favorite: boolean) => void;
  title: string;
  sku?: string;
  mro?: MRO;
  productsCardsAlerts?: AlertInlineProps[];
  quantitySelectOptions?: SelectOptionsType[];
  discountPill?: PillProps;
  promoPill?: PillProps;
  cartPill?: PillProps;
  favoriteIconColor?: IconColor;
  stock?: Stock;
  loyalty?: {
    label: string;
    imageSrc: string;
  };
  price?: PriceProps;
  imageSrc: string;
  dataTestId?: string;
  imageHeight?: string;
  imageWidth?: string;
  actionQuantityInput?: ActionQuantityInput;
  actionButton?: ActionButton;
}
