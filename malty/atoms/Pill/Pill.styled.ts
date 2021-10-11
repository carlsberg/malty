import styled, { css } from 'styled-components';
import { PillColor, PillSizeType } from './Pill.types';

export const StyledPill = styled.div<{
  size: string;
  fontSize: string;
  iconSize: string;
  padding: string;
  isRounded: boolean;
  hasOnClick: boolean;
  color: PillColor;
  hasText: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: 1;
  font-weight: bold;
  background-color: ${({ color, theme }) => theme.color.information[color].value};
  color: ${({ theme }) => theme.color.white.value};
  display: inline-flex;
  align-items: center;
  height: ${({ size }) => `${size}px`};
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
      margin-right: ${({ hasText, theme }) => hasText && theme.variables.pill.icon.size.xsmall.value}px;
      height: ${({ iconSize }) => iconSize}px;
      width: ${({ iconSize }) => iconSize}px;
    }
    &__remove-icon {
      margin-left: ${({ padding }) => padding}px;
      height: ${({ iconSize }) => iconSize}px;
      width: ${({ iconSize }) => iconSize}px;
      cursor: pointer;
      transition: 0.25s ease-in-out;
      transition-property: fill, transform;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }

  ${({ size, hasText, padding }) => {
    if (size === PillSizeType.ExtraSmall || size === PillSizeType.Small) {
      return css`
        padding: 0 ${padding}px;
        .pill {
          &__icon {
            ${hasText && `margin-right: ${parseInt(padding, 10) / 2}px;`};
          }
          &__remove-icon,
          &__icon {
            padding: ${parseInt(padding, 10) / 2}px 0;
            height: 100%;
            width: auto;
          }
        }
      `;
    }
    return css`
      padding: 0 ${padding}px;
    `;
  }}
`;
