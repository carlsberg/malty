/* eslint-disable no-nested-ternary */
import { space } from '@carlsberg/malty.utils.space';
import styled, { css, keyframes } from 'styled-components';
import { ButtonColor, ButtonIconPosition, ButtonSize, StyledButtonProps } from './Button.types';

const animateShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
`;

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  border: none;
  gap: ${({ theme }) => theme.sizes.s.value};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${({ iconPos }) =>
    ButtonIconPosition[iconPos] === ButtonIconPosition.Right ? 'row' : 'row-reverse'};

  ${({ theme, size, hasText }) => {
    switch (size) {
      case ButtonSize.XSmall: {
        return css`
          font-family: ${theme.typography.desktop.text.small_bold['font-family'].value};
          font-size: ${theme.typography.desktop.text.small_bold['font-size'].value};
          height: ${theme.sizes.m.value};
          max-width: ${!hasText && theme.sizes.m.value};
          padding: 0 ${hasText ? theme.sizes['2xs'].value : theme.sizes['4xs'].value};

          svg {
            height: ${theme.sizes.s.value};
            width: ${theme.sizes.s.value};
          }
        `;
      }
      case ButtonSize.Small: {
        return css`
          font-family: ${theme.typography.desktop.text['medium-small_bold']['font-family'].value};
          font-size: ${theme.typography.desktop.text['medium-small_bold']['font-size'].value};
          height: ${theme.sizes.l.value};
          max-width: ${!hasText && theme.sizes.l.value};
          padding: 0 ${hasText ? theme.sizes.xs.value : theme.sizes['3xs'].value};

          svg {
            height: ${theme.sizes.ms.value};
            width: ${theme.sizes.ms.value};
          }
        `;
      }
      case ButtonSize.Large: {
        return css`
          font-family: ${theme.typography.desktop.text['medium-small_bold']['font-family'].value};
          font-size: ${theme.typography.desktop.text['medium-small_bold']['font-size'].value};
          height: ${theme.sizes['2xl'].value};
          max-width: ${!hasText && theme.sizes['2xl'].value};
          padding: 0 ${hasText ? `${theme.sizes.s.value}` : `${theme.sizes.xs.value}`};

          svg {
            height: ${theme.sizes.m.value};
            width: ${theme.sizes.m.value};
          }
        `;
      }
      case ButtonSize.XLarge: {
        return css`
          font-family: ${theme.typography.desktop.text.medium_bold['font-family'].value};
          font-size: ${theme.typography.desktop.text.medium_bold['font-size'].value};
          height: ${theme.sizes['3xl'].value};
          max-width: ${!hasText && theme.sizes['3xl'].value};
          padding: 0 ${theme.sizes.s.value};

          svg {
            height: ${theme.sizes.m.value};
            width: ${theme.sizes.m.value};
          }
        `;
      }
      default: {
        return css`
          font-family: ${theme.typography.desktop.text['medium-small_bold']['font-family'].value};
          font-size: ${theme.typography.desktop.text['medium-small_bold']['font-size'].value};
          height: ${theme.sizes.xl.value};
          max-width: ${!hasText && theme.sizes.xl.value};
          padding: 0 ${hasText ? `${theme.sizes.s.value}` : `${theme.sizes['2xs'].value}`};

          svg {
            height: ${theme.sizes.m.value};
            width: ${theme.sizes.m.value};
          }
        `;
      }
    }
  }}

  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.colours.default.white.value};
    background-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
  }

  .text-container {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.sizes['2xs'].value};
    opacity: 1;
    font: inherit;
    &.invisible {
      opacity: 0;
    }
  }

  .secondary-container {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${animateShow} 0.25s linear;
    > div {
      gap: 0;
      padding: 0;
    }
  }

  ${({ hasText, hasIcon, isLoading }) =>
    ((!hasText && !hasIcon) || isLoading) &&
    css`
      .text-container {
        visibility: hidden;
      }
      .secondary-container {
        position: absolute;
      }
    `};

  ${space}
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ isNegative, theme, color }) =>
    isNegative
      ? theme.colors.colours.default.white.value
      : color === ButtonColor.DigitalBlack
      ? theme.colors.colours.default['digital-black'].value
      : theme.colors.theme[color].value};
  color: ${({ isNegative, theme, color }) =>
    isNegative
      ? color === ButtonColor.DigitalBlack
        ? theme.colors.colours.default['digital-black'].value
        : theme.colors.theme[color].value
      : theme.colors.colours.default.white.value};
  border: 1px solid ${({ theme }) => theme.colors.colours.default.transparent.value};

  &:hover {
    filter: brightness(${({ isNegative }) => (isNegative ? '95%' : '140%')});
    > div:first-child {
      filter: brightness(70%);
    }
  }

  &:active {
    filter: brightness(${({ isNegative }) => (isNegative ? '90%' : '170%')});
    > div:first-child {
      filter: brightness(60%);
    }
  }

  &:disabled {
    ${({ isNegative, theme }) =>
      isNegative &&
      css`
        background-color: ${theme.colors.colours.system['disable-dark-theme'].value};
        color: ${theme.colors.colours.system['disable-dark-theme'].value};
        &:hover {
          background-color: ${theme.colors.colours.system['disable-dark-theme'].value};
          color: ${theme.colors.colours.system['disable-dark-theme'].value};
        }
        svg {
          fill: ${theme.colors.colours.system['disable-dark-theme'].value};
          color: ${theme.colors.colours.system['disable-dark-theme'].value};
        }
      `};
  }

  ${({ $selected }) =>
    $selected &&
    css`
      opacity: 0.75;
    `};
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
  color: ${({ isNegative, theme, color }) =>
    isNegative
      ? theme.colors.colours.default.white.value
      : color === ButtonColor.DigitalBlack
      ? theme.colors.colours.default['digital-black'].value
      : theme.colors.theme[color].value};
  border: 1px solid
    ${({ isNegative, theme, color }) =>
      isNegative
        ? theme.colors.colours.default.white.value
        : color === ButtonColor.DigitalBlack
        ? theme.colors.colours.default['digital-black'].value
        : theme.colors.theme[color].value};
  &:hover {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colors.colours.overlay.white[5].value
        : theme.colors.colours.overlay['digital-black'][5].value};
  }
  &:active {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colors.colours.overlay.white[10].value
        : theme.colors.colours.overlay['digital-black'][10].value};
  }
  &:disabled {
    svg {
      fill: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colors.colours.system['disable-dark-theme'].value
          : theme.colors.colours.system['disable-light-theme'].value};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colors.colours.system['disable-dark-theme'].value
          : theme.colors.colours.system['disable-light-theme'].value};
    }
    background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
    border: 1px solid
      ${({ isNegative, theme }) =>
        isNegative
          ? theme.colors.colours.system['disable-dark-theme'].value
          : theme.colors.colours.system['disable-light-theme'].value};
    color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colors.colours.system['disable-dark-theme'].value
        : theme.colors.colours.system['disable-light-theme'].value};
    &:hover {
      background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
      border: 1px solid
        ${({ isNegative, theme }) =>
          isNegative
            ? theme.colors.colours.system['disable-dark-theme'].value
            : theme.colors.colours.system['disable-light-theme'].value};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colors.colours.system['disable-dark-theme'].value
          : theme.colors.colours.system['disable-light-theme'].value};
    }
  }

  ${({ $selected, isNegative, theme }) =>
    $selected &&
    css`
      background-color: ${isNegative
        ? theme.colors.colours.overlay.white[10].value
        : theme.colors.colours.overlay['digital-black'][10].value};
    `}
`;

export const StyledTransparentButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};

  color: ${({ isNegative, theme, color }) =>
    isNegative
      ? theme.colors.colours.default.white.value
      : color === ButtonColor.DigitalBlack
      ? theme.colors.colours.default['digital-black'].value
      : theme.colors.theme[color].value};
  &.active {
    background-color: ${({ theme }) => theme.colors.colours.support[40].value};
  }
  &:hover {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colors.colours.overlay.white[5].value
        : theme.colors.colours.overlay['digital-black'][5].value};
  }
  &:active {
    background-color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colors.colours.overlay.white[10].value
        : theme.colors.colours.overlay['digital-black'][10].value};
  }
  &:disabled {
    svg {
      fill: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colors.colours.system['disable-dark-theme'].value
          : theme.colors.colours.system['disable-light-theme'].value};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colors.colours.system['disable-dark-theme'].value
          : theme.colors.colours.system['disable-light-theme'].value};
    }
    background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
    color: ${({ isNegative, theme }) =>
      isNegative
        ? theme.colors.colours.system['disable-dark-theme'].value
        : theme.colors.colours.system['disable-light-theme'].value};
    &:hover {
      background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
      color: ${({ isNegative, theme }) =>
        isNegative
          ? theme.colors.colours.system['disable-dark-theme'].value
          : theme.colors.colours.system['disable-light-theme'].value};
    }
  }

  ${({ $selected, isNegative, theme }) =>
    $selected &&
    css`
      background-color: ${isNegative
        ? theme.colors.colours.overlay.white[10].value
        : theme.colors.colours.overlay['digital-black'][10].value};
    `}
`;
