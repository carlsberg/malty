import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledIcon } from './IconWrapper.styled';
import { IconWrapperInterface, SizesTypes } from './IconWrapper.types';

const IconWrapper = ({ size, color, viewBox, className, onClick }: IconWrapperInterface, icon: JSX.Element) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.variables.button.size.medium.value);

  useEffect(() => {
    switch (size) {
      case SizesTypes.Small: {
        setNumSize(theme.variables.icon.size.small.value);
        break;
      }
      case SizesTypes.Large: {
        setNumSize(theme.variables.icon.size.large.value);
        break;
      }
      default: {
        setNumSize(theme.variables.icon.size.medium.value);
        break;
      }
    }
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
