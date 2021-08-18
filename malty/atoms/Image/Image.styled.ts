import styled, { css } from 'styled-components';
import { Position } from './Image.types';

export const StyledImage = styled.img<{ isCover?: boolean }>`
  display: flex;
  ${({ isCover }) =>
    isCover &&
    css`
      height: 100%;
      width: 100%;
    `}
`;

export const StyledContainer = styled.div<{ isCover?: boolean; borderPosition?: Position }>`
  position: relative;
  display: inline-flex;
  background-color: ${({ theme }) => theme.color.support.support20.value};
  ${({ isCover }) =>
    isCover &&
    css`
      height: 100%;
      width: 100%;
    `}
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

export const StyledOverlay = styled.div<{ gradientPosition?: Position }>`
  position: absolute;
  height: 100%;
  width: 100%;
  ${({ gradientPosition }) => {
    if (gradientPosition === Position.Top) {
      return css`
        top: 0;
        left: 0;
        background: linear-gradient(0deg, #21283300 0%, #21283300 43%, #212833ff 100%);
      `;
    }
    if (gradientPosition === Position.Right) {
      return css`
        right: 0;
        top: 0;
        background: linear-gradient(90deg, #21283300 0%, #21283300 43%, #212833ff 100%);
      `;
    }
    if (gradientPosition === Position.Bottom) {
      return css`
        bottom: 0;
        left: 0;
        background: linear-gradient(180deg, #21283300 0%, #21283300 43%, #212833ff 100%);
      `;
    }
    if (gradientPosition === Position.Left) {
      return css`
        left: 0;
        top: 0;
        background: linear-gradient(270deg, #21283300 0%, #21283300 43%, #212833ff 100%);
      `;
    }
    return ``;
  }};
`;
