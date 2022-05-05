export interface StepperProps {
  steps: number | StepsType[];
  currentStep: number;
  isMultiStep?: boolean;
}

export interface StepsType {
  label: string;
  key: number;
}
