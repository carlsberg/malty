export interface SegmentControllerProps {
  size?: SegmentControllerSize;
  onChange?: (value: string) => void;
  dataQaId?: string;
  options: SegmentControllerOptions[];
  disabled?: boolean;
  selected?: string;
}

export enum SegmentControllerSize {
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium'
}

export interface SegmentControllerOptions {
  label: string;
  value: string;
}
