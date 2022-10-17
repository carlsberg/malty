import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useIconColor, useNumSize } from './IconWrapper.helper';
import { StyledIcon } from './IconWrapper.styled';
import { IconColor, IconSize, IconWrapperProps } from './IconWrapper.types';

const IconWrapper = (
  { size = IconSize.Medium, color = IconColor.DigitalBlack, viewBox, className, onClick }: IconWrapperProps,
  icon: JSX.Element
) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const iconSize = useNumSize({ size });
  const iconColor = useIconColor({ color });
  return (
    <StyledIcon
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={setIconColor}
      size={setIconSize}
      onClick={onClick}
      theme={theme}
      data-testid="svg-component-test"
    >
      {icon}
    </StyledIcon>
  );
};

export default IconWrapper;
