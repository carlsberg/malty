export interface LoadingProps {
  text?: string;
  size?: LoadingSize;
  status: LoadingStatus;
}

export enum LoadingSize {
  Small = 'Small',
  Medium = 'Medium'
}

export enum LoadingSizeNumber {
  Small = 24,
  Medium = 48
}

export enum LoadingStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}
