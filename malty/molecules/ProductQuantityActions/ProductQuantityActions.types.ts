import { ButtonProps } from '@carlsberggroup/malty.atoms.button';
import { InputProps } from '@carlsberggroup/malty.atoms.input';
import { TextColor } from '@carlsberggroup/malty.atoms.text';

export interface Stock {
  label: string;
  labelColor?: TextColor;
  stockColor?: TextColor;
  availability?: string;
}
export type ActionButton = Pick<ButtonProps, 'text' | 'icon' | 'style' | 'disabled' | 'loading' | 'color' | 'onClick'>;

export type ActionQuantityInput = Pick<InputProps, 'value' | 'min' | 'max' | 'readOnly' | 'onValueChange'>;
export interface ProductQuantityActionsProps {
  dataTestId?: string;
  stock?: Stock;
  actionQuantityInput?: ActionQuantityInput;
  actionButton?: ActionButton;
  hideQuantityInput?: boolean;
}
