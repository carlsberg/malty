import React from 'react';

export interface AccordionProps {
  size?: AccordionSize;
  children: React.ReactElement<AccordionItemProps>[];
  variant?: AccordionColor;
  dataQaId?: string;
}

// export interface AccordionItemProps {
//   children: JSX.Element;
//   title: string;
//   open?: boolean;
// }

export interface AccordionItemProps {
  children: JSX.Element;
  title: string;
  open?: boolean;
  size?: AccordionSize;
  dataQaId?: string;
}

export enum AccordionSize {
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'ExtraLarge',
  XXLarge = 'ExtraExtraLarge'
}

export enum AccordionColor {
  Transparent = 'transparent',
  Support = 'support'
}
