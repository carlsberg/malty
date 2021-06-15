import { NamesTypes } from '../icon/icon.types';

export interface ButtonInterface extends React.HTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: NamesTypes;
  url?: string;
  buttonType: ButtonType;
  size?: SizeTypes;
  inverseColor?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  success?: boolean;
}

export enum SizeTypes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export enum Sizes {
  Small = 38,
  Medium = 48,
  Large = 58
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Floater = 'floater',
  Link = 'link'
}
