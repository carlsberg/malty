import { SpaceProps } from '@carlsberg/malty.utils.space';

export interface AvatarProps extends SpaceProps {
  profileImg?: string;
  userName?: string;
  size?: AvatarSize;
  editable?: boolean;
  loading?: boolean;
  onClick?: () => void;
  dataQaId?: string;
}

export enum AvatarSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export type StyledAvatarProps = {
  profileImg?: string;
  size?: string;
  isLoading: boolean;
  editable: boolean;
} & SpaceProps;
