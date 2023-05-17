import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { TextColor } from '@carlsberggroup/malty.atoms.text';

export interface ProductQuantityActionsProps {
  dataTestId?: string;
  initialQuantityValue?: number;
  maxQuantity?: number;
  hideQuantityInput?: boolean;
  stock?: {
    label: string;
    labelColor?: TextColor;
    stockColor?: TextColor;
    availability?: string;
  };
  action?: {
    variant: ButtonStyle;
    color?: ButtonColor;
    label?: string;
    icon?: IconName;
    onClick: () => void;
  };
  onInputQuantityChange?: (value: number) => void;
}
