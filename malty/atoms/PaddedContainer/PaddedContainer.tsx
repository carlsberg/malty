import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledPaddedContainer } from './PaddedContainer.styled';
import { PaddedContainerProps, PaddedContainerSizeType } from './PaddedContainer.types';

export const PaddedContainer = ({ children, padding = PaddedContainerSizeType.None }: PaddedContainerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [paddingSize, setPadding] = useState(theme.typography.text.medium['font-size'].value);

  useEffect(() => {
    switch (padding) {
      case PaddedContainerSizeType.Micro: {
        setPadding(theme.variables.container.size.micro.value);
        break;
      }
      case PaddedContainerSizeType.Tiny: {
        setPadding(theme.variables.container.size.tiny.value);
        break;
      }
      case PaddedContainerSizeType.XSmall: {
        setPadding(theme.variables.container.size.xsmall.value);
        break;
      }
      case PaddedContainerSizeType.Small: {
        setPadding(theme.variables.container.size.small.value);
        break;
      }
      case PaddedContainerSizeType.Medium: {
        setPadding(theme.variables.container.size.medium.value);
        break;
      }
      case PaddedContainerSizeType.Large: {
        setPadding(theme.variables.container.size.large.value);
        break;
      }
      case PaddedContainerSizeType.XLarge: {
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
    <StyledPaddedContainer padding={paddingSize} theme={theme}>
      {children}
    </StyledPaddedContainer>
  );
};
