import { SpaceProps } from '@carlsberg/malty.utils.space';
import React, { ReactElement } from 'react';

export interface FloaterProps extends SpaceProps {
  text?: string | number;
  icon?: ReactElement;
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
  Left = 'Left'
}

export enum FloaterColor {
  DigitalBlack = 'digital-black',
  ThemePrimary = 'themePrimary',
  ThemeSecondary = 'themeSecondary',
  ThemeTertiary = 'themeTertiary'
}

export type StyledFloaterButtonProps = {
  hasText: boolean;
  hasIcon: boolean;
  isNegative?: boolean;
  fullWidth?: boolean;
  color: FloaterColor;
  iconPos: FloaterIconPosition;
  showButton: boolean;
} & SpaceProps;
