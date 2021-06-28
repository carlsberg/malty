import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { PillColor, PillFontSize, PillHeight, PillSizeType } from './Pill.types';

export const StyledPill = styled.div<{
  size: PillSizeType;
  isRounded: boolean;
  hasOnClick: boolean;
  color: PillColor;
  hasText: boolean;
}>`
  background-color: ${({ color }) => theme.informationColors[color]};
  color: ${theme.colors.white};
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  font-size: ${({ size }) => `${PillFontSize[size]}px`};
  height: ${({ size }) => `${PillHeight[size]}px`};
  font-family: ${theme.fontFamily.text};
  transition: background-color 0.25s ease-in-out;

  ${({ hasOnClick }) =>
    hasOnClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${theme.colors.support};
      }
    `}
  ${({ isRounded, size }) =>
    isRounded &&
    css`
      border-radius: ${PillHeight[size] / 2}px;
    `}

  .pill {
    &__icon {
      ${({ hasText }) => hasText && 'margin-right: 8px;'};
    }
    &__remove-icon {
      margin-left: 8px;
      cursor: pointer;
      transition: 0.25s ease-in-out;
      transition-property: fill, transform;
      &:hover {
        fill: ${theme.colors.support};
        transform: rotate(90deg);
      }
    }
  }

  ${({ size, hasText }) => {
    if (size === PillSizeType.ExtraSmall || size === PillSizeType.Small) {
      return css`
        padding: 0 8px;
        .pill {
          &__icon {
            ${hasText && 'margin-right: 4px;'};
          }
          &__remove-icon,
          &__icon {
            padding: 4px 0;
            height: 100%;
            width: auto;
          }
        }
      `;
    }
    return css`
      padding: 0 16px;
    `;
  }}
`;
