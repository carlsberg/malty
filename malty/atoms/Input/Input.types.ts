import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  onValueChange: (value: string) => void;
  type: InputType;
  placeholder?: string;
  error?: string;
  icon?: IconNamesTypes;
  iconPosition?: IconPosition;
  disabled?: boolean;
  size?: SizeTypes;
  clearable?: boolean;
  mask?: MaskTypes | RegExp;
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  Date = 'date',
  Search = 'search',
  Telephone = 'tel',
  URL = 'url'
}

export enum SizeTypes {
  Medium = 'Medium',
  Large = 'Large'
}

export enum Sizes {
  Medium = 48,
  Large = 58
}

export enum IconPosition {
  Left = 'Left',
  Right = 'Right'
}

export enum MaskTypes {
  Telephone = 'telephone',
  CreditCard = 'credit_card'
}
