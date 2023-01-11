import React from 'react';

export interface HeadlineProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headlineStyle?: HeadlineStyle;
  align?: HeadlineAlign;
  color?: HeadlineColor;
  as?: HeadlineTags;
  children: React.ElementType;
}

export enum HeadlineStyle {
  Display = 'display',
  Hero = 'hero',
  Huge = 'huge',
  Big = 'big',
  Large = 'large',
  MediumLarge = 'medium-large',
  Medium = 'medium',
}
export enum HeadlineAlign {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}
export enum HeadlineColor {
  ThemePrimary = 'theme-primary',
  DigitalBlack = 'digital-black',
  White = 'white',
}

export enum HeadlineTags {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  Span = 'span',
}
