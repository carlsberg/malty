export interface LoadingProps {
  text?: string;
  size?: SizeTypes;
  status: LoadingStatus;
}


export enum SizeTypes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
}

export enum Sizes {
  Small = 24,
  Medium = 48,
  Large = 58,
}

export enum LoadingStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure',
}
