import React from 'react';

export interface AccordionProps {
  size: AccordionSize;
  children: React.ReactElement<AccordionItemProps>[];
  variant?: AccordionColor;
  dataQaId?: string;
  defaultActiveKey?: string;
  alwaysOpen?: boolean;
}

export interface AccordionItemProps {
  children: JSX.Element;
  title: string;

  size?: AccordionSize;
  dataQaId?: string;
  eventKey: string;
  onChange?: (id: string) => void;
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
export interface AccordionContext {
  activeEventKey: string | undefined;
  alwaysOpen: boolean;
}
