export interface LoadingProps {
  text?: string;
  size?: LoadingSize;
  status?: LoadingStatus;
  dataQaId?: string;
}

export enum LoadingSize {
  Small = 'Small',
  Medium = 'Medium'
}

export enum LoadingStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}
