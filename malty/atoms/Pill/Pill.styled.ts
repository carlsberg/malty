import { IconColor } from '@carlsberggroup/malty.atoms.icon';
import styled, { css } from 'styled-components';
import { PillColor, PillSize } from './Pill.types';

export const StyledPill = styled.div<{
  size: string;
  fontSize: string;
  fontFamily: string;
  iconSize: string;
  padding: string;
  color: PillColor;
  textColor: IconColor;
  hasText: boolean;
  badgeMode: boolean;
  pillSize: PillSize;
  gap: string;
}>`
  font-family: ${({ fontFamily }) => `${fontFamily}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: bold;
  background-color: ${({ color, theme }) => {
    if (color === PillColor.Primary) {
      return theme.colors.theme.themePrimary.value;
    }
    if (color === PillColor.Secondary) {
      return theme.colors.theme.themeSecondary.value;
    }
    if (color === PillColor.Archive) {
      return theme.colors.colours.support[40].value;
    }
    return theme.colors.colours.system[color].value;
  }};
  color: ${({ textColor }) => textColor};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: ${({ size }) => `${size}`};
  transition: background-color 0.25s ease-in-out;
  border-radius: ${({ size }) => `${size}`};
  padding: 0 ${({ padding }) => padding};
  gap: ${({ gap }) => gap};

  .pill {
    &__icon {
      height: ${({ iconSize }) => iconSize};
      width: ${({ iconSize }) => iconSize};
    }
  }

  ${({ size, hasText, theme }) =>
    !hasText &&
    css`
      padding: ${theme.sizes['5xs'].value};
      width: ${size};
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ badgeMode, pillSize, theme }) => {
    if (!badgeMode) return null;
    if (pillSize === PillSize.ExtraSmall) {
      return css`
        min-width: ${theme.sizes['2xs'].value};
        padding: 0 ${theme.sizes['4xs'].value};
      `;
    }
    if (pillSize === PillSize.Small) {
      return css`
        min-width: ${theme.sizes.s.value};
        padding: 0 ${theme.sizes['4xs'].value};
      `;
    }
    return css`
      min-width: ${theme.sizes.m.value};
      padding: 0 ${theme.sizes['4xs'].value};
    `;
  }}
`;
