import { space } from '@carlsberg/malty.utils.space';
import styled, { css } from 'styled-components';
import { FloaterColor, FloaterIconPosition, StyledFloaterButtonProps } from './Floater.types';

export const StyledFloaterButton = styled.button<StyledFloaterButtonProps>`
  background-color: ${({ isNegative, theme, color }) => {
    if (isNegative) {
      return theme.colors.colours.default.white.value;
    }
    if (color === FloaterColor.DigitalBlack) {
      return theme.colors.colours.default['digital-black'].value;
    }
    return theme.colors.theme[color].value;
  }};
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.default.white.value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-family'].value};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `0 ${theme.sizes.s.value}`};
  height: ${({ theme }) => `${theme.sizes['2xl'].value}`};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-size'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-weight'].value};
  z-index: 100;
  right: ${({ theme }) => theme.sizes.m.value};
  position: absolute;
  bottom: ${({ theme, showButton }) => (showButton ? theme.sizes.m.value : '-36px')};
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => `${theme.sizes.m.value}`};
  gap: ${({ theme }) => theme.sizes.s.value};
  width: auto;
  flex-direction: ${({ iconPos }) =>
    FloaterIconPosition[iconPos] === FloaterIconPosition.Right ? 'row' : 'row-reverse'};

  @media screen and (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    bottom: ${({ theme, showButton }) => (showButton ? theme.sizes.s.value : '-36px')};
    right: ${({ theme }) => theme.sizes.s.value};
  }
  &:hover {
    opacity: 0.95;
  }
  &:active {
    opacity: 0.9;
  }

  .text-container {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.sizes.s.value};
    opacity: 1;
  }

  ${({ hasText, hasIcon }) =>
    !hasText &&
    hasIcon &&
    css`
      padding: 0;
      justify-content: center;

      width: ${({ theme }) => `${theme.sizes['2xl'].value}`};
    `};

  ${space}
`;
