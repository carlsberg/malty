import { SpaceProps } from '@carlsberggbs/malty.utils.space';

export interface ProgressBarProps extends SpaceProps {
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
