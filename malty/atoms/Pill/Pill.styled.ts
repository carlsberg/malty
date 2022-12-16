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
  pillSize: PillSize;
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
  height: ${({ size }) => `${size}`};
  transition: background-color 0.25s ease-in-out;
  border-radius: ${({ size }) => `${size}`};

  .pill {
    &__icon {
      ${({ pillSize, hasText }) => {
        if (pillSize === PillSize.ExtraSmall || pillSize === PillSize.Small) {
          return css`
            margin-right: ${({ theme }) => hasText && theme.sizes['5xs'].value};
          `;
        }

        return css`
          margin-right: ${({ theme }) => hasText && theme.sizes['4xs'].value};
        `;
      }}

      height: ${({ iconSize }) => iconSize};
      width: ${({ iconSize }) => iconSize};
    }
  }

  ${({ size, hasText, padding, pillSize, theme }) => {
    if (!hasText) {
      return css`
        padding: ${theme.sizes['5xs'].value};
        width: ${size};
        display: flex;
        align-items: center;
        justify-content: center;
      `;
    }
    if (pillSize === PillSize.ExtraSmall) {
      return css`
        padding: 0 ${padding} 0 ${theme.sizes['4xs'].value}; ;
      `;
    }
    if (pillSize === PillSize.Small) {
      return css`
        padding: 0 ${padding} 0 ${theme.sizes['2xs'].value}; ;
      `;
    }
    return css`
      padding: 0 ${padding} 0 ${theme.sizes.xs.value}; ;
    `;
  }}
`;
export const StyledText = styled.div<{
  marginText: string;
  hasText: boolean;
}>`
  margin-left: ${({ hasText, marginText }) => hasText && marginText};
`;
