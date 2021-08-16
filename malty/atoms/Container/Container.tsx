import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledContainer } from './Container.styled';
import { ContainerProps, ContainerSizeType } from './Container.types';

export const Container = ({ children, padding = ContainerSizeType.None }: ContainerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [paddingSize, setPadding] = useState(theme.typography.text.medium['font-size'].value);

  useEffect(() => {
    switch (padding) {
      case ContainerSizeType.Micro: {
        setPadding(theme.variables.container.size.micro.value);
        break;
      }
      case ContainerSizeType.Tiny: {
        setPadding(theme.variables.container.size.tiny.value);
        break;
      }
      case ContainerSizeType.XSmall: {
        setPadding(theme.variables.container.size.xsmall.value);
        break;
      }
      case ContainerSizeType.Small: {
        setPadding(theme.variables.container.size.small.value);
        break;
      }
      case ContainerSizeType.Medium: {
        setPadding(theme.variables.container.size.medium.value);
        break;
      }
      case ContainerSizeType.Large: {
        setPadding(theme.variables.container.size.large.value);
        break;
      }
      case ContainerSizeType.XLarge: {
        setPadding(theme.variables.container.size.xlarge.value);
        break;
      }
      default: {
        setPadding(theme.variables.container.size.none.value);
        break;
      }
    }
  }, [padding, theme]);

  return (
    <StyledContainer padding={paddingSize} theme={theme}>
      {children}
    </StyledContainer>
  );
};
