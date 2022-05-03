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
  negative?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  tabIndex?: number;
  children?: string | JSX.Element;
  dataTestId?: string;
  selected?: boolean;
}

export enum ButtonType {
  Submit = 'submit',
  Default = 'button',
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
  Link = 'Link'
}

export enum ButtonIconPosition {
  Right = 'Right',
  Left = 'Left'
}
