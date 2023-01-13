import { IconName } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface FloaterProps {
  text?: string | number;
  icon?: IconName;
  iconPos?: FloaterIconPosition;
  negative?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  scroll?: number;
  tabIndex?: number;
  dataTestId?: string;
  children?: string | JSX.Element;
  color?: FloaterColor;
}

export enum FloaterIconPosition {
  Right = 'Right',
  Left = 'Left',
}

export enum FloaterColor {
  DigitalBlack = 'digital-black',
  ThemePrimary = 'themePrimary',
  ThemeSecondary = 'themeSecondary',
  ThemeTertiary = 'themeTertiary',
}
