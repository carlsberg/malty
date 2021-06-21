import { NamesTypes } from '../icon/icon.types';

export interface InputInterface extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  onValueChange: (value: string) => void;
  type: InputType;
  placeholder?: string;
  error?: string;
  icon?: NamesTypes;
  isIconLeft?: boolean;
  isDisabled?: boolean;
  size?: SizeTypes;
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
