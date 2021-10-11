export interface LoadingProps {
  text?: string;
  size?: SizeTypes;
  status: LoadingStatus;
}

export enum SizeTypes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export enum LoadingStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}
