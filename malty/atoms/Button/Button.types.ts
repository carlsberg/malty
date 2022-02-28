import { IconName } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface ButtonProps {
  text?: string | number;
  icon?: IconName;
  iconPos?: ButtonIconPosition;
  url?: string;
  type?: ButtonType;
  style: ButtonStyle;
  size?: ButtonSize;
  isWhite?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  selected?: boolean;
  scroll?: number;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  success?: boolean;
  fullWidth?: boolean;
  successIcon?: IconName;
  successText?: string;
  errorIcon?: IconName;
  errorText?: string;
  tabIndex?: number;
  children?: string | JSX.Element;
}

export enum ButtonType {
  Submit = 'submit',
  Button = 'button',
  Reset = 'reset'
}

export enum ButtonSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export enum ButtonStyle {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Transparent = 'Transparent',
  Floater = 'Floater',
  Link = 'Link'
}

export enum ButtonIconPosition {
  Right = 'Right',
  Left = 'Left'
}
