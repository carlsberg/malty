import { IconColor } from '@carlsberggroup/malty.atoms.icon';
import styled, { css } from 'styled-components';
import { PillColor, PillSize } from './Pill.types';

export const StyledPill = styled.div<{
  size: string;
  fontSize: string;
  iconSize: string;
  padding: string;

  color: PillColor;
  textColor: IconColor;
  hasText: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-family'].value};
  font-size: ${({ fontSize }) => `${fontSize}`};
  line-height: 1;
  font-weight: bold;
  background-color: ${({ color, theme }) => {
    if (color === PillColor.Primary) {
      return theme.colors.theme.themePrimary.value;
    }
    if (color === PillColor.Secondary) {
      return theme.colors.theme.themeSecondary.value;
    }
    if (color === PillColor.Support40) {
      return theme.colors.colours.support[40].value;
    }
    return theme.colors.colours.system[color].value;
  }};
  color: ${({ textColor }) => textColor};
  display: inline-flex;
  align-items: center;
  height: ${({ size }) => `${size}`};
  transition: background-color 0.25s ease-in-out;
  border-radius: 50px;

  .pill {
    &__icon {
      margin-right: ${({ hasText, theme }) => hasText && theme.sizes['2xs'].value};
      height: ${({ iconSize }) => iconSize};
      width: ${({ iconSize }) => iconSize};
    }
  }

  ${({ size, hasText, padding }) => {
    if (size === PillSize.ExtraSmall || size === PillSize.Small) {
      return css`
        padding: 0 ${padding};
        .pill {
          &__icon {
            ${hasText && `margin-right: ${parseInt(padding.replace('px', ''), 10) / 2}px;`};
            padding: ${parseInt(padding.replace('px', ''), 10) / 2}px 0;
            height: 100%;
            width: auto;
          }
        }
      `;
    }
    if (!hasText) {
      return css`
        padding: ${({ theme }) => theme.sizes['5xs'].value};
        width: ${size};
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
    return css`
      padding: 0 ${padding};
    `;
  }}
`;
