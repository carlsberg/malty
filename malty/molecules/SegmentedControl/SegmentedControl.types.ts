import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface SegmentedControlProps extends SpaceProps {
  size?: SegmentedControlSize;
  onChange?: (value: string) => void;
  dataQaId?: string;
  options: SegmentedControlOptions[];
  disabled?: boolean;
  selected?: string;
}

export enum SegmentedControlSize {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium'
}

export interface SegmentedControlOptions {
  label: string;
  value: string;
}
