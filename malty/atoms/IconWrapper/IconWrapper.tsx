import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledIcon } from './IconWrapper.styled';
import { IconColor, IconSize, IconWrapperProps } from './IconWrapper.types';

const IconWrapper = (
  { size = IconSize.Medium, color = IconColor.DigitalBlack, viewBox, className, onClick }: IconWrapperProps,
  icon: JSX.Element
) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.m.value);
  const [iconColor, setIconColor] = useState(theme.colors.colours.default['digital-black'].value);

  useEffect(() => {
    setNumSize(theme.sizes[size].value);
  }, [size, theme]);

  useEffect(() => {
    if (
      color === IconColor.Alert ||
      color === IconColor.AlertLight ||
      color === IconColor.DisableDark ||
      color === IconColor.DisableLight ||
      color === IconColor.Fail ||
      color === IconColor.FailLight ||
      color === IconColor.Notification ||
      color === IconColor.NotificationLight ||
      color === IconColor.Success ||
      color === IconColor.SuccessLight
    ) {
      return setIconColor(theme.colors.colours.system[color].value);
    }
    if (
      color === IconColor.Support20 ||
      color === IconColor.Support40 ||
      color === IconColor.Support60 ||
      color === IconColor.Support80 ||
      color === IconColor.Support100
    ) {
      return setIconColor(theme.colors.colours.support[color].value);
    }
    if (color === IconColor.Primary || color === IconColor.Secondary || color === IconColor.Tertiary) {
      return setIconColor(theme.colors.theme[color].value);
    }
    return setIconColor(theme.colors.colours.default[color].value);
  }, [color, theme]);

  return (
    <StyledIcon
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={iconColor}
      size={numSize}
      onClick={onClick}
      theme={theme}
      data-testid="svg-component"
    >
      {icon}
    </StyledIcon>
  );
};

export default IconWrapper;
