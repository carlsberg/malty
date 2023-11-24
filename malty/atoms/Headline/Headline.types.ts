import { SpaceProps } from '@carlsberggroup/malty.utils.space';
import React, { ReactNode } from 'react';

export interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement>, SpaceProps {
  headlineStyle?: HeadlineStyle;
  align?: HeadlineAlign;
  color?: HeadlineColor;
  as?: React.ElementType;
  children: ReactNode;
  dataTestId?: string;
}

export enum HeadlineStyle {
  Display = 'display',
  Banner = 'banner',
  Huge = 'huge',
  Big = 'big',
  Large = 'large',
  MediumLarge = 'medium-large',
  Medium = 'medium'
}
export enum HeadlineAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right'
}
export enum HeadlineColor {
  ThemePrimary = 'theme-primary',
  DigitalBlack = 'digital-black',
  White = 'white'
}

export type StyledHeadlineProps = {
  headlineStyle: HeadlineStyle;
  color: HeadlineColor;
  align: HeadlineAlign;
} & SpaceProps;
