export interface AvatarProps {
  profileImg?: string;
  username?: string;
  size?: AvatarSize;
  editable?: boolean;
}

export enum AvatarSize {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}
