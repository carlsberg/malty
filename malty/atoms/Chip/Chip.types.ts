import { SpaceProps } from '@carlsberggroup/malty.utils.space';
import { ReactElement } from 'react';

export interface ChipProps extends SpaceProps {
  selected: boolean;
  showAction?: boolean;
  label: string;
  size?: ChipSize;
  onChange?: (selected: boolean) => void;
  icon?: ReactElement;
  dataTestId?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

export enum ChipSize {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium'
}

export type StyledChipProps = {
  height: string;
  hasButton?: boolean;
  selected: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  size?: ChipSize;
} & SpaceProps;
