import { IconNamesTypes as NamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { MouseEventHandler } from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  icon?: NamesTypes;
  color?: PillColor;
  size?: PillSizeType;
  isRounded?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onRemoveClick?: MouseEventHandler<SVGElement> | false;
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
