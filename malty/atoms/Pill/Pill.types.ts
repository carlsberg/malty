import { IconColor } from '@carlsberggbs/malty.atoms.base-icon';
import { SpaceProps } from '@carlsberggbs/malty.utils.space';
import { ReactElement } from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLElement>, SpaceProps {
  text?: string;
  icon?: ReactElement;
  iconPosition?: IconPosition;
  type?: PillType;
  size?: PillSize;
  dataTestId?: string;
  isUppercase?: boolean;
}

export enum PillSize {
  XSmall = 'xs',
  Small = 's',
  Medium = 'm'
}

export enum PillType {
  Primary = 'primary',
  Success = 'success',
  Alert = 'alert',
  Fail = 'fail',
  Notification = 'notification',
  Archive = 'archive',
  Secondary = 'secondary',
  Disabled = 'disabled'
}

export enum IconPosition {
  Leading = 'leading',
  Trailing = 'trailing'
}

export interface UsePillStylesProps {
  size: PillSize;
}

export interface IconTextColorProps {
  type: PillType;
}

export interface UsePillBackgroundColorProps {
  type: PillType;
}

export type StyledPillProps = {
  $size: string;
  $fontSize: string;
  $fontWeight: string;
  $lineHeight: string;
  $backgroundColor: string;
  $textColor: IconColor;
  $hasText: boolean;
  $hasIcon: boolean;
  $padding: string;
  $pillSize: PillSize;
  $gap: string;
  $isUppercase: boolean;
} & SpaceProps;
