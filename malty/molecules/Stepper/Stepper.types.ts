export interface StepperProps {
  steps: number | StepsType[];
  currentStep: number;
  isMultiStep?: boolean;
  dataQaId?: string;
}

export interface StepsType {
  label: string;
  key: number;
}
