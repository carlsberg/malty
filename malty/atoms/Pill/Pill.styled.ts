import styled, { css } from 'styled-components';
import { PillColor, PillSizeType } from './Pill.types';

export const StyledPill = styled.div<{
  size: string;
  fontSize: string;
  isRounded: boolean;
  hasOnClick: boolean;
  color: PillColor;
  hasText: boolean;
}>`
  background-color: ${({ color, theme }) => theme.color.information[color].value};
  color: ${({ theme }) => theme.color.white.value};
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: 1.25;
  height: ${({ size }) => `${size}px`};
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
  transition: background-color 0.25s ease-in-out;

  ${({ hasOnClick }) =>
    hasOnClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.color.information.indirect.value};
      }
    `}
  ${({ isRounded, size }) =>
    isRounded &&
    css`
      border-radius: ${parseInt(size, 10) / 2}px;
    `}

  .pill {
    &__icon {
      ${({ theme, hasText }) => hasText && `margin-right: ${theme.variables.pill.padding.value}px;`};
    }
    &__remove-icon {
      margin-left: ${({ theme }) => theme.variables.pill.padding.value}px;
      cursor: pointer;
      transition: 0.25s ease-in-out;
      transition-property: fill, transform;
      &:hover {
        fill: ${({ theme }) => theme.color.information.indirect.value};
        transform: rotate(90deg);
      }
    }
  }

  ${({ theme, size, hasText }) => {
    if (size === PillSizeType.ExtraSmall || size === PillSizeType.Small) {
      return css`
        padding: 0 ${theme.variables.pill.padding.value}px;
        .pill {
          &__icon {
            ${hasText && `margin-right: ${parseInt(theme.variables.pill.padding.value, 10) / 2}px;`};
          }
          &__remove-icon,
          &__icon {
            padding: ${parseInt(theme.variables.pill.padding.value, 10) / 2}px 0;
            height: 100%;
            width: auto;
          }
        }
      `;
    }
    return css`
      padding: 0 ${parseInt(theme.variables.pill.padding.value, 10) * 2}px;
    `;
  }}
`;
