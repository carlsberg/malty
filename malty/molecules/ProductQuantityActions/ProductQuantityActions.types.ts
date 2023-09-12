import { ButtonProps } from '@carlsberggroup/malty.atoms.button';
import { InputProps } from '@carlsberggroup/malty.atoms.input';
import { StockStatusProps } from '@carlsberggroup/malty.molecules.stock-status';

export type ActionButton = Pick<ButtonProps, 'text' | 'icon' | 'style' | 'disabled' | 'loading' | 'color' | 'onClick'>;
export type ActionQuantityInput = Pick<InputProps, 'value' | 'min' | 'max' | 'readOnly' | 'onValueChange'>;
export type Stock = StockStatusProps;

export interface ProductQuantityActionsProps {
  dataTestId?: string;
  stock?: Stock;
  actionQuantityInput?: ActionQuantityInput;
  actionButton: ActionButton;
}
