import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledIcon } from './IconWrapper.styled';
import { IconWrapperInterface } from './IconWrapper.types';

const IconWrapper = ({ size, color, viewBox, className, onClick }: IconWrapperInterface, icon: JSX.Element) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledIcon
      viewBox={viewBox ?? '0 0 24 24'}
      className={className}
      color={color}
      size={size}
      onClick={onClick}
      theme={theme}
      data-testid="svg-component"
    >
      {icon}
    </StyledIcon>
  );
};

export default IconWrapper;
