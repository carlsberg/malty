import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Loading, LoadingSize, LoadingStatus } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledAvatar, StyledCamera, StyledLoadingContainer } from './Avatar.styled';
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

  const lastName = nameArray.pop();
  const lastInitial = lastName?.charAt(0);

  return `${firstInitial}${lastInitial}`;
};

export const Avatar = ({
  profileImg,
  userName,
  size,
  editable = false,
  onClick = () => null,
  loading = false,
  dataQaId
}: AvatarProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [NumSize, setNumSize] = useState(theme.sizes.xl.value);
  const [iconSize, setIconSize] = useState(IconSize.MediumSmall);
  const [fontSize, setfontSize] = useState(theme.typography.desktop.text.small_bold['font-size'].value);

  const handleOnClick = () => {
    onClick();
  };

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
      <StyledAvatar
        onClick={handleOnClick}
        fontSize={fontSize}
        size={NumSize}
        profileImg={profileImg}
        data-testid={dataQaId}
        theme={theme}
        isLoading={loading}
        editable={editable}
      >
        {loading && (
          <StyledLoadingContainer>
            <Loading size={LoadingSize.Small} status={LoadingStatus.Pending} />
          </StyledLoadingContainer>
        )}
        {editable && (
          <StyledCamera data-testid={`${dataQaId}-camera-icon`} theme={theme} size={size}>
            <Icon color={IconColor.Support60} size={iconSize} name={IconName.Camera} />
          </StyledCamera>
        )}
        {!profileImg && userName && <span data-testid={`${dataQaId}-name`}> {displayInitials(userName)} </span>}
        {!profileImg && !userName && <Icon color={IconColor.Primary} size={iconSize} name={IconName.Customer} />}
      </StyledAvatar>
    </TypographyProvider>
  );
};
