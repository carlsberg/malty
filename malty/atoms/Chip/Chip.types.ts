import { IconName } from '@carlsberggroup/malty.atoms.icon';

export interface ChipProps {
  selected: boolean;
  showAction?: boolean;
  label: string;
  size?: ChipSize;
  onChange?: (selected: boolean) => void;
  icon?: IconName;
  dataTestId?: string;
}

export enum ChipSize {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium'
}
