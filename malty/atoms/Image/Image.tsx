import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ImageProps } from '.';
import { StyledContainer, StyledImage, StyledOverlay } from './Image.styled';

export const Image = ({ url, cover = false, border, gradient, alt, overlay }: ImageProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledContainer theme={theme} isCover={cover} borderPosition={border}>
      <StyledOverlay gradientPosition={gradient} overlay={overlay} />
      <StyledImage src={url} isCover={cover} alt={alt} />
    </StyledContainer>
  );
};
