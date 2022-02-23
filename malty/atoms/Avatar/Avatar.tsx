import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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

export const Avatar = ({ profileImg, username, fontSize }: AvatarProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledAvatar profileImg={profileImg} fontSize={fontSize} data-testid="avatar" theme={theme}>
      {!profileImg && username && <span> {displayInitials(username)} </span>}
    </StyledAvatar>
  );
};
