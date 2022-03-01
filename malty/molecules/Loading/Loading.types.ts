export interface LoadingProps {
  text?: string;
  size?: LoadingSize;
  status: LoadingStatus;
}

export enum LoadingSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export enum LoadingSizeNumber {
  Small = 16,
  Medium = 24,
  Large = 48
}

export enum LoadingStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}
