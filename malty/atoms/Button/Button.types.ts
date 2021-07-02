import { NamesTypes } from '../Icon/Icon.types';

export interface ButtonInterface {
  text?: string;
  icon?: NamesTypes;
  buttonType: ButtonType;
  size?: SizeTypes;
  isWhite?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
