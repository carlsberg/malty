import { IconName } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface ButtonProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'style'> {
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
  color?: ButtonColor;
}

export enum ButtonColor {
  DigitalBlack = 'digital-black',
  ThemePrimary = 'themePrimary',
  ThemeSecondary = 'themeSecondary',
  ThemeTertiary = 'themeTertiary',
}

export enum ButtonType {
  Submit = 'submit',
  Default = 'button',
  Reset = 'reset',
}

export enum ButtonSize {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
}

export enum ButtonStyle {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Transparent = 'Transparent',
}

export enum ButtonIconPosition {
  Right = 'Right',
  Left = 'Left',
}
