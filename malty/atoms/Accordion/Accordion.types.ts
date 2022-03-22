import React from 'react';

export interface AccordionProps {
  size?: AccordionSize;
  children: React.ReactElement<AccordionItemProps>[];
  variant?: AccordionColor;
}

export interface AccordionItemProps {
  children: JSX.Element;
  title: string;
  open?: boolean;
}

export interface AccordionItemProps2 {
  children: JSX.Element;
  title: string;
  open?: boolean;
  size?: AccordionSize;
}

export enum AccordionSize {
  Medium = 'Medium',
  Large = 'Large',
  ExtraLarge = 'ExtraLarge',
  ExtraExtraLarge = 'ExtraExtraLarge'
}

export enum AccordionColor {
  Transparent = 'transparent',
  Support = 'support'
}
