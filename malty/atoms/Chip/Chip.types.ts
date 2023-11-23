import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface ChipProps extends SpaceProps {
  selected: boolean;
  showAction?: boolean;
  label: string;
  size?: ChipSize;
  onChange?: (selected: boolean) => void;
  icon?: IconName;
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
