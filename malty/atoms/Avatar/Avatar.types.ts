export interface AvatarProps {
  profileImg?: string;
  userName?: string;
  size?: AvatarSize;
  editable?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

export enum AvatarSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}
