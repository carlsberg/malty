import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Loading, LoadingSize, LoadingStatus } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
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
  dataQaId,
  ...props
}: AvatarProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [iconSize, setIconSize] = useState(IconSize.MediumSmall);

  const handleOnClick = () => {
    onClick();
  };

  useEffect(() => {
    switch (size) {
      case AvatarSize.Small: {
        setIconSize(IconSize.ExtraSmall);
        break;
      }
      case AvatarSize.Medium: {
        setIconSize(IconSize.MediumSmall);
        break;
      }
      case AvatarSize.Large: {
        setIconSize(IconSize.Medium);
        break;
      }
      case AvatarSize.XLarge: {
        setIconSize(IconSize.Large);
        break;
      }
      default: {
        setIconSize(IconSize.MediumSmall);
        break;
      }
    }
  }, [size, theme]);

  return (
    <StyledAvatar
      onClick={handleOnClick}
      size={size}
      profileImg={profileImg}
      data-testid={dataQaId}
      theme={theme}
      isLoading={loading}
      editable={editable}
      {...props}
    >
      {loading && (
        <StyledLoadingContainer>
          <Loading dataQaId={`${dataQaId}-loading`} size={LoadingSize.Small} status={LoadingStatus.Pending} />
        </StyledLoadingContainer>
      )}
      {editable && (
        <StyledCamera data-testid={`${dataQaId}-camera-icon`} theme={theme} size={size}>
          <Icon color={IconColor.Support60} size={iconSize} name={IconName.Camera} />
        </StyledCamera>
      )}
      {!profileImg && userName && <span data-testid={`${dataQaId}-name`}> {displayInitials(userName)} </span>}
      {!profileImg && !userName && <Icon color={IconColor.Support40} size={iconSize} name={IconName.Customer} />}
    </StyledAvatar>
  );
};
