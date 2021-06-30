import { MouseEventHandler } from 'react';
import { NamesTypes } from '../Icon/Icon.types';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  icon?: NamesTypes;
  color?: PillColor;
  size?: PillSizeType;
  isRounded?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onRemoveClick?: MouseEventHandler<SVGElement>;
}

export enum PillSizeType {
  ExtraSmall = 'ExtraSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export enum PillColor {
  New = 'new',
  Live = 'live',
  Multiple = 'multiple',
  Hold = 'hold',
  Archive = 'archive',
  Disable = 'disable',
  Active = 'active',
  Prospect = 'prospect',
  Parked = 'parked',
  Indirect = 'indirect',
  Wholesaler = 'wholesaler',
  Closed = 'closed'
}

export enum PillHeight {
  ExtraSmall = 16,
  Small = 24,
  Medium = 32,
  Large = 40
}

export enum PillFontSize {
  ExtraSmall = 8,
  Small = 10,
  Medium = 12,
  Large = 12
}
