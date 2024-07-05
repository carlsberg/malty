import { ButtonProps } from '@carlsberg/malty.atoms.button';
import { InputProps } from '@carlsberg/malty.atoms.input';
import { TextColor } from '@carlsberg/malty.atoms.text';
import { SpaceProps } from '@carlsberg/malty.utils.space';

export interface Stock {
  label: string;
  labelColor?: TextColor;
  stockColor?: TextColor;
  availability?: string;
}

export type ActionButton = Pick<ButtonProps, 'text' | 'icon' | 'style' | 'disabled' | 'loading' | 'color' | 'onClick'>;

export type ActionQuantityInput = Pick<InputProps, 'value' | 'min' | 'max' | 'readOnly' | 'onValueChange'>;

export interface ProductQuantityActionsProps extends SpaceProps {
  dataTestId?: string;
  stock?: Stock;
  actionQuantityInput?: ActionQuantityInput;
  actionButton?: ActionButton;
}
