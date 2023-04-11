export interface ProgressBarProps {
  progress: number;
  label?: string;
  displayAmount?: boolean;
  disabled?: boolean;
  size?: ProgressBarSize;
  dataTestId?: string;
}

export enum ProgressBarSize {
  Small = 'Small',
  Medium = 'Medium'
}
