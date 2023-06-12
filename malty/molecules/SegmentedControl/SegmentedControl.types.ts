export interface SegmentedControlProps {
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
