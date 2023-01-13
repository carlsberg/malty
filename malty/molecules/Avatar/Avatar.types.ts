export interface AvatarProps {
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
