import { IconColor } from '@carlsberggbs/malty.atoms.base-icon';
import { SpaceProps } from '@carlsberggbs/malty.utils.space';
import { ReactElement } from 'react';

export interface PillProps extends React.HTMLAttributes<HTMLElement>, SpaceProps {
  text?: string;
  icon?: ReactElement;
  type?: PillType;
  size?: PillSize;
  dataTestId?: string;
  isUppercase?: boolean;
}

export enum PillSize {
  ExtraSmall = 'ExtraSmall',
  Small = 'Small',
  Medium = 'Medium'
}

export enum PillType {
  Primary = 'primary',
  Secondary = 'secondary',
  Archive = 'support40',
  Success = 'success',
  AlertStrong = 'alert-strong',
  Fail = 'fail',
  NotificationStrong = 'notification-strong',
  AlertLight = 'alert-light',
  NotificationLight = 'notification-light',
  SuccessLight = 'success-light',
  Disabled = 'disable-light-theme'
}

export interface UsePillStylesProps {
  size: PillSize;
}

export interface IconTextColorProps {
  type: PillType;
}

export type StyledPillProps = {
  size: string;
  fontSize: string;
  fontFamily: string;
  padding: string;
  type: PillType;
  textColor: IconColor;
  hasText: boolean;
  hasIcon: boolean;
  pillSize: PillSize;
  gap: string;
  isUppercase: boolean;
} & SpaceProps;
