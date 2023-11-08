import { ProgressSpinnerColor } from '@carlsberggroup/malty.atoms.progress-spinner';
import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface LoadingProps extends SpaceProps {
  text?: string;
  size?: LoadingSize;
  status?: LoadingStatus;
  dataQaId?: string;
  negative?: boolean;
  color?: ProgressSpinnerColor;
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
