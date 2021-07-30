import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface ButtonProps {
  text?: string;
  icon?: IconNamesTypes;
  iconPos?: IconPosition;
  url?: string;
  buttonType: ButtonType;
  size?: SizeTypes;
  isWhite?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  success?: boolean;
  fullWidth?: boolean;
  successIcon?: IconNamesTypes;
  successText?: string;
  errorIcon?: IconNamesTypes;
  errorText?: string;
}

export enum SizeTypes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export enum Sizes {
  Small = 32,
  Medium = 40,
  Large = 48,
  XLarge = 56
}

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Floater = 'floater',
  Link = 'link'
}

export enum IconPosition {
  Right = 'Right',
  Left = 'Left'
}
