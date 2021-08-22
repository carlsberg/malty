import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ImageProps } from '.';
import { StyledContainer, StyledImage, StyledOverlay } from './Image.styled';

export const Image = ({ src, cover = false, border, gradient, alt, overlay, height, width }: ImageProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledContainer theme={theme} isCover={cover} borderPosition={border} height={height} width={width}>
      <StyledOverlay theme={theme} gradientPosition={gradient} overlay={overlay} />
      <StyledImage src={src} isCover={cover} alt={alt} />
    </StyledContainer>
  );
};
