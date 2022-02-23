import styled, { css } from 'styled-components';
import { PillColor, PillSize } from './Pill.types';

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
  font-family: inherit;
  font-size: ${({ fontSize }) => `${fontSize}`};
  line-height: 1;
  font-weight: bold;
  background-color: ${({ color, theme }) => theme.colors.colours.information[color].value};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
  display: inline-flex;
  align-items: center;
  height: ${({ size }) => `${size}px`};
  transition: background-color 0.25s ease-in-out;

  ${({ hasOnClick }) =>
    hasOnClick &&
    css`
      cursor: pointer;
      &:hover {
        background: ${({ theme }) => theme.colors.colours.information.indirect.value};
      }
    `}
  ${({ isRounded, size }) =>
    isRounded &&
    css`
      border-radius: ${parseInt(size.replace('px', ''), 10) / 2}px;
    `}

  .pill {
    &__icon {
      margin-right: ${({ hasText, theme }) => hasText && theme.sizes['2xs'].value};
      height: ${({ iconSize }) => iconSize};
      width: ${({ iconSize }) => iconSize};
    }
    &__remove-icon {
      margin-left: ${({ padding }) => padding};
      height: ${({ iconSize }) => iconSize};
      width: ${({ iconSize }) => iconSize};
      cursor: pointer;
      transition: 0.25s ease-in-out;
      transition-property: fill, transform;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }

  ${({ size, hasText, padding }) => {
    if (size === PillSize.ExtraSmall || size === PillSize.Small) {
      return css`
        padding: 0 ${padding};
        .pill {
          &__icon {
            ${hasText && `margin-right: ${parseInt(padding.replace('px', ''), 10) / 2}px;`};
          }
          &__remove-icon,
          &__icon {
            padding: ${parseInt(padding.replace('px', ''), 10) / 2}px 0;
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
