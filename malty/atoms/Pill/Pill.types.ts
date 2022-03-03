import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { MouseEventHandler } from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  icon?: IconName;
  color?: PillColor;
  size?: PillSize;
  isRounded?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  onRemoveClick?: MouseEventHandler<SVGElement> | false;
}

export enum PillSize {
  ExtraSmall = 'ExtraSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export enum PillColor {
  Archive = 'archive',
  Close = 'close',
  Disable = 'disable',
  Hold = 'hold',
  Indirect = 'indirect',
  Live = 'live',
  Multiple = 'multiple',
  New = 'new',
  Parked = 'parked',
  Prospect = 'prospect',
  Update = 'update',
  Wholesaler = 'wholesaler'
}
