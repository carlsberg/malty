import { rgbToHex } from '@carlsberggroup/malty.utils.colors';
import styled, { css } from 'styled-components';
import { Overlay, Position } from './Image.types';

export const StyledImage = styled.img<{ isCover?: boolean }>`
  display: flex;
  height: 100%;
  width: 100%;
  object-fit: ${({ isCover }) => (isCover ? `cover` : `contain`)};
`;

export const StyledContainer = styled.div<{
  isCover?: boolean;
  borderPosition?: Position;
  height?: string;
  width?: string;
}>`
  position: relative;
  display: inline-flex;
  background-color: ${({ theme }) => theme.color.support.support20.value};
  ${({ height, width }) => {
    let dimensions;
    if (height || width) {
      dimensions = css`
        height: ${height ? height.concat('px') : '100%'};
        width: ${width ? width.concat('px') : '100%'};
      `;
    }
    return dimensions;
  }}

  ${({ borderPosition }) => {
    if (borderPosition === Position.Top) {
      return css`
        border-top: ${({ theme }) => `8px solid ${theme.color.theme.themePrimary.value}`};
      `;
    }
    if (borderPosition === Position.Right) {
      return css`
        border-right: ${({ theme }) => `8px solid ${theme.color.theme.themePrimary.value}`};
      `;
    }
    if (borderPosition === Position.Bottom) {
      return css`
        border-bottom: ${({ theme }) => `8px solid ${theme.color.theme.themePrimary.value}`};
      `;
    }
    if (borderPosition === Position.Left) {
      return css`
        border-left: ${({ theme }) => `8px solid ${theme.color.theme.themePrimary.value}`};
      `;
    }
    return ``;
  }}
`;

export const StyledOverlay = styled.div<{ gradientPosition?: Position; overlay?: Overlay }>`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  ${({ theme, gradientPosition, overlay }) => {
    if (gradientPosition && !overlay) {
      const primaryFadedHex = `${rgbToHex(theme.color.theme.themePrimary.value)}00`;
      if (gradientPosition === Position.Top) {
        return css`
          background: linear-gradient(
            0deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.color.theme.themePrimary.value} 100%
          );
        `;
      }
      if (gradientPosition === Position.Right) {
        return css`
          background: linear-gradient(
            90deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.color.theme.themePrimary.value} 100%
          );
        `;
      }
      if (gradientPosition === Position.Bottom) {
        return css`
          background: linear-gradient(
            180deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.color.theme.themePrimary.value} 100%
          );
        `;
      }
      if (gradientPosition === Position.Left) {
        return css`
          background: linear-gradient(
            270deg,
            ${primaryFadedHex} 0%,
            ${primaryFadedHex} 43.23%,
            ${theme.color.theme.themePrimary.value} 100%
          );
        `;
      }
    }
    if (overlay) {
      return css`
        background: ${theme.color.theme.themePrimary.value};
        opacity: ${overlay}%;
      `;
    }
    return ``;
  }};
`;
