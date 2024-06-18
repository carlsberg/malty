import { rgbToHex } from '@carlsberggbs/malty.utils.colors';
import { space } from '@carlsberggbs/malty.utils.space';
import styled, { css } from 'styled-components';
import { ImageEffectPosition, ImageOverlay, StyledContainerProps } from './Image.types';

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  display: inline-block;

  ${space}
`;

export const StyledFigure = styled.figure<{
  height?: string;
  width?: string;
}>`
  height: ${({ height }) => (height ? height.replace('px', '').concat('px') : '100%')};
  width: ${({ width }) => (width ? width.replace('px', '').concat('px') : '100%')};
  margin: 0;
`;

export const StyledWrapper = styled.div<{
  isCover?: boolean;
  removeBackground?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, removeBackground }) =>
    removeBackground ? 'none' : theme.colors.colours.support[20].value};
  text-align: center;
  width: 100%;
  height: 100%;
  svg {
    width: 1/3;
    height: 1/3;
  }
`;

export const StyledOverlay = styled.span<{
  gradientPosition?: ImageEffectPosition;
  overlay?: ImageOverlay;
}>`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  ${({ theme, gradientPosition, overlay }) => {
    if (gradientPosition && !overlay) {
      const primaryFadedHex = `${rgbToHex(theme.colors.theme.themePrimary.value)}00`;
      if (gradientPosition === ImageEffectPosition.Top) {
        return css`
          background: linear-gradient(
            0deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.colors.theme.themePrimary.value} 100%
          );
        `;
      }
      if (gradientPosition === ImageEffectPosition.Right) {
        return css`
          background: linear-gradient(
            90deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.colors.theme.themePrimary.value} 100%
          );
        `;
      }
      if (gradientPosition === ImageEffectPosition.Bottom) {
        return css`
          background: linear-gradient(
            180deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.colors.theme.themePrimary.value} 100%
          );
        `;
      }
      if (gradientPosition === ImageEffectPosition.Left) {
        return css`
          background: linear-gradient(
            270deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.colors.theme.themePrimary.value} 100%
          );
        `;
      }
    }
    if (overlay) {
      return css`
        background: ${theme.colors.theme.themePrimary.value};
        opacity: ${overlay}%;
      `;
    }
    return ``;
  }};
`;

export const StyledImage = styled.img<{
  isCover?: boolean;
  borderPosition?: ImageEffectPosition;
}>`
  object-fit: ${({ isCover }) => (isCover ? `cover` : `contain`)};
  ${({ borderPosition }) => {
    if (borderPosition === ImageEffectPosition.Top) {
      return css`
        border-top: ${({ theme }) => `${theme.sizes['2xs'].value} solid ${theme.colors.theme.themePrimary.value}`};
      `;
    }
    if (borderPosition === ImageEffectPosition.Right) {
      return css`
        border-right: ${({ theme }) => `${theme.sizes['2xs'].value} solid ${theme.colors.theme.themePrimary.value}`};
      `;
    }
    if (borderPosition === ImageEffectPosition.Bottom) {
      return css`
        border-bottom: ${({ theme }) => `${theme.sizes['2xs'].value} solid ${theme.colors.theme.themePrimary.value}`};
      `;
    }
    if (borderPosition === ImageEffectPosition.Left) {
      return css`
        border-left: ${({ theme }) => `${theme.sizes['2xs'].value} solid ${theme.colors.theme.themePrimary.value}`};
      `;
    }
    return ``;
  }}
`;
