export interface LoadingProps {
  text?: string;
  size?: SizeTypes;
  status: LoadingStatus;
}

export enum LoadingStatus {
  Default = 'Default',
  Success = 'Success',
  Failure = 'Failure',
}

export enum SizeTypes {
  Medium = 'Medium',
  Large = 'Large'
}

export enum Sizes {
  Medium = 48,
  Large = 58
}
