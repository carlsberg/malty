import { space } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';
import { PillSize, PillType, StyledPillProps } from './Pill.types';

export const StyledPill = styled.div<StyledPillProps>`
  font-family: ${({ fontFamily }) => `${fontFamily}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: bold;
  background-color: ${({ type, theme }) => {
    if (type === PillType.Primary) {
      return theme.colors.theme.themePrimary.value;
    }
    if (type === PillType.Secondary) {
      return theme.colors.theme.themeSecondary.value;
    }
    if (type === PillType.Archive) {
      return theme.colors.colours.support[40].value;
    }
    return theme.colors.colours.system[type].value;
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
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : 'initial')};

  .pill {
    &__icon {
      height: ${({ iconSize }) => iconSize};
      width: ${({ iconSize }) => iconSize};
    }
  }

  ${({ hasIcon, hasText, pillSize, size, theme }) => {
    if (!hasIcon) return null;
    if (!hasText) {
      if (pillSize === PillSize.ExtraSmall) {
        return css`
          padding: ${theme.sizes['5xs'].value};
          width: ${size};
        `;
      }
      return css`
        padding: ${theme.sizes['4xs'].value};
        width: ${size};
      `;
    }
    if (pillSize === PillSize.ExtraSmall) {
      return css`
        padding: 0 ${theme.sizes['3xs'].value} 0 ${theme.sizes['4xs'].value};
      `;
    }
    if (pillSize === PillSize.Small) {
      return css`
        padding: 0 ${theme.sizes.xs.value} 0 ${theme.sizes['2xs'].value};
      `;
    }
    return css`
      padding: 0 ${theme.sizes.s.value} 0 ${theme.sizes.xs.value};
    `;
  }}

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

  ${space}
`;
