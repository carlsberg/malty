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
  min-width: ${({ size }) => `${size}`};
  box-sizing: border-box;
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

  ${({ hasIcon, hasText, pillSize, theme }) => {
    let paddingLeft = '';

    if (hasIcon && !hasText) {
      return css`
        padding: 0;
      `;
    }

    switch (pillSize) {
      case PillSize.ExtraSmall:
        if (hasIcon && hasText) {
          paddingLeft = theme.sizes['4xs'].value;
        }
        break;
      case PillSize.Small:
        if (hasIcon && hasText) {
          paddingLeft = theme.sizes['3xs'].value;
        }
        break;
      default:
        if (hasIcon && hasText) {
          paddingLeft = theme.sizes['2xs'].value;
        }
        break;
    }

    return css`
      padding-left: ${paddingLeft};
    `;
  }}

  ${space}
`;
