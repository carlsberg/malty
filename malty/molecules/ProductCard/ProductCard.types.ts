import { IconColor } from '@carlsberg/malty.atoms.base-icon';
import { CardOrientation, CardStyle } from '@carlsberg/malty.atoms.card';
import { PillProps } from '@carlsberg/malty.atoms.pill';
import { PriceProps } from '@carlsberg/malty.atoms.price';
import { SelectOptionsType } from '@carlsberg/malty.atoms.select';
import { AlertInlineProps } from '@carlsberg/malty.molecules.alert-inline';
import { ActionButton, ActionQuantityInput, Stock } from '@carlsberg/malty.molecules.product-quantity-actions';
import { MRO } from '@carlsberg/malty.molecules.sku';
import { SpaceProps } from '@carlsberg/malty.utils.space';

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
