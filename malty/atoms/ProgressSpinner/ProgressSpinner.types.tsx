export interface ProgressSpinnerProps {
  status?: ProgressSpinnerStatus;
  dataQaId?: string;
}

export enum ProgressSpinnerStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}

export enum ProgressSpinnerSize {
  Small = 'Small',
  Medium = 'Medium'
}
