import React from 'react';
import { StyledAvatar } from './Avatar.styled';
import { AvatarProps } from './Avatar.types';

const displayInitials = (username: string) => {
  if (typeof username !== 'string') {
    return null;
  }
  const nameArray = username.split(' ');
  const firstName = nameArray[0];
  const firstInitial = firstName.charAt(0);

  if (nameArray.length === 1) {
    return firstInitial;
  }

  const lastName = nameArray[nameArray.length - 1];
  const lastInitial = lastName.charAt(0);

  return `${firstInitial} ${lastInitial}`;
};

export const Avatar = ({ profileImg, username, fontSize }: AvatarProps) => (
  <StyledAvatar profileImg={profileImg} fontSize={fontSize}>
    {!profileImg && username && <span> {displayInitials(username)} </span>}
  </StyledAvatar>
);
