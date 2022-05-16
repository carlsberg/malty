import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledAvatar, StyledCamera } from './Avatar.styled';
import { AvatarProps, AvatarSize } from './Avatar.types';

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

  return `${firstInitial}${lastInitial}`;
};

export const Avatar = ({ profileImg, username, size, editable = false }: AvatarProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [NumSize, setNumSize] = useState(theme.sizes.xl.value);
  const [iconSize, setIconSize] = useState(IconSize.MediumSmall);
  const [fontSize, setfontSize] = useState(theme.typography.desktop.text.small_bold['font-size'].value);

  useEffect(() => {
    switch (size) {
      case AvatarSize.Small: {
        setNumSize(theme.sizes.m.value);
        setfontSize(theme.typography.desktop.text.tiny_bold['font-size'].value);
        setIconSize(IconSize.ExtraSmall);
        break;
      }
      case AvatarSize.Medium: {
        setNumSize(theme.sizes.xl.value);
        setfontSize(theme.typography.desktop.text.small_bold['font-size'].value);
        setIconSize(IconSize.MediumSmall);
        break;
      }
      case AvatarSize.Large: {
        setNumSize(theme.sizes['3xl'].value);
        setfontSize(theme.typography.desktop.headline.medium['font-size'].value);
        setIconSize(IconSize.Medium);
        break;
      }
      case AvatarSize.XLarge: {
        setNumSize(theme.sizes['4xl'].value);
        setfontSize(theme.typography.desktop.headline.large['font-size'].value);
        setIconSize(IconSize.Large);
        break;
      }
      default: {
        setNumSize(theme.sizes.xl.value);
        setfontSize(theme.typography.desktop.text.small_bold['font-size'].value);
        setIconSize(IconSize.MediumSmall);
        break;
      }
    }
  }, [size, theme]);

  return (
    <TypographyProvider>
      <StyledAvatar fontSize={fontSize} size={NumSize} profileImg={profileImg} data-testid="avatar" theme={theme}>
        {editable && (
          <StyledCamera theme={theme} size={size}>
            <Icon color={IconColor.Primary} size={iconSize} name={IconName.Camera} />
          </StyledCamera>
        )}
        {!profileImg && username && <span> {displayInitials(username)} </span>}
        {!profileImg && !username && <Icon color={IconColor.Primary} size={iconSize} name={IconName.Customer} />}
      </StyledAvatar>
    </TypographyProvider>
  );
};
