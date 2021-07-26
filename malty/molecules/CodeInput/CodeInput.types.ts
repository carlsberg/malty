import { IconNamesTypes } from '@carlsberg/malty.atoms.icon';

export interface CodeInputProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  onValueChange: (value: string) => void;
  type: CodeInputType;
  placeholder?: string;
  error?: string;
  icon?: IconNamesTypes;
  isIconLeft?: boolean;
  isDisabled?: boolean;
  size?: SizeTypes;
}

export enum CodeInputType {
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
