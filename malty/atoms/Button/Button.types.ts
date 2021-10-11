import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface ButtonProps {
  text?: string;
  icon?: IconNamesTypes;
  iconPos?: IconPosition;
  url?: string;
  type?: ButtonTypes;
  style: ButtonStyle;
  size?: SizeTypes;
  isWhite?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
  scroll?: number;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  success?: boolean;
  fullWidth?: boolean;
  successIcon?: IconNamesTypes;
  successText?: string;
  errorIcon?: IconNamesTypes;
  errorText?: string;
  children?: string;
}

export enum ButtonTypes {
  Submit = 'submit',
  Button = 'button',
  Reset = 'reset'
}

export enum SizeTypes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Floater = 'floater',
  Link = 'link'
}

export enum IconPosition {
  Right = 'Right',
  Left = 'Left'
}
