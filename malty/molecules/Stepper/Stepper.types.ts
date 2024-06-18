import { SpaceProps } from '@carlsberggbs/malty.utils.space';

export interface StepperProps extends SpaceProps {
  steps: number | StepsType[];
  currentStep: number;
  isMultiStep?: boolean;
  dataQaId?: string;
}

export interface StepsType {
  label: string;
  key: number;
}
