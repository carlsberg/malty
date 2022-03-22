import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledIcon } from './IconWrapper.styled';
import { IconColor, IconSize, IconWrapperProps } from './IconWrapper.types';

const IconWrapper = (
  { size = IconSize.Medium, color = IconColor.Primary, viewBox, className, onClick }: IconWrapperProps,
  icon: JSX.Element
) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.m.value);

  useEffect(() => {
    setNumSize(theme.sizes[size].value);
  }, [size, theme]);

  return (
    <StyledIcon
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={color}
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
