import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledPaddedContainer } from './PaddedContainer.styled';
import { PaddedContainerProps, PaddedContainerSize } from './PaddedContainer.types';

export const PaddedContainer = ({
  children,
  padding = PaddedContainerSize.None,
  dataTestId,
  ...props
}: PaddedContainerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [paddingSize, setPadding] = useState(theme.typography.desktop.text.medium_default['font-size'].value);

  useEffect(() => {
    switch (padding) {
      case PaddedContainerSize.Micro: {
        setPadding(theme.sizes['2xs'].value);
        break;
      }
      case PaddedContainerSize.Tiny: {
        setPadding(theme.sizes.s.value);
        break;
      }
      case PaddedContainerSize.XSmall: {
        setPadding(theme.sizes.m.value);
        break;
      }
      case PaddedContainerSize.Small: {
        setPadding(theme.sizes.l.value);
        break;
      }
      case PaddedContainerSize.Medium: {
        setPadding(theme.sizes.xl.value);
        break;
      }
      case PaddedContainerSize.Large: {
        setPadding(theme.sizes['2xl'].value);
        break;
      }
      case PaddedContainerSize.XLarge: {
        setPadding(theme.sizes['3xl'].value);
        break;
      }
      default: {
        setPadding('0');
        break;
      }
    }
  }, [padding, theme]);

  return (
    <StyledPaddedContainer padding={paddingSize} theme={theme} data-testid={dataTestId} {...props}>
      {children}
    </StyledPaddedContainer>
  );
};
