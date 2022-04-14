import styled, { css, keyframes } from 'styled-components';
import { ButtonIconPosition } from './Button.types';

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

const StyledButton = styled.button<{
  hasText: boolean;
  hasIcon: boolean;
  isNegative?: boolean;
  fullWidth?: boolean;
  sizing: string;
  horizontalPadding: string;
  fontSize: string;
  iconSize: string;
  iconPos: ButtonIconPosition;
  showButton: boolean;
}>`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `0 ${theme.sizes.s.value}`};
  height: ${({ sizing }) => `${sizing}`};
  font-size: ${({ fontSize }) => `${fontSize}`};
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  border: none;
  gap: ${({ theme }) => theme.sizes.s.value};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${({ iconPos }) =>
    ButtonIconPosition[iconPos] === ButtonIconPosition.Right ? 'row' : 'row-reverse'};
  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.colours.default.white.value};
    background-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    &:hover {
      color: ${({ theme }) => theme.colors.colours.default.white.value};
      background-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    }
  }

  .text-container {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.sizes.s.value};
    opacity: 1;
    &.invisible {
      opacity: 0;
    }
  }

  .secondary-container {
    position: absolute;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.sizes.s.value};
    animation: ${animateShow} 0.25s linear;
  }

  svg {
    height: ${({ iconSize }) => `${iconSize}`};
    width: ${({ iconSize }) => `${iconSize}`};
  }

  ${({ hasText, hasIcon, sizing }) =>
    !hasText &&
    hasIcon &&
    css`
      padding: 0;
      justify-content: center;
      width: ${sizing};
    `};
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default.white.value : theme.colors.colours.default['digital-black'].value};
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.default.white.value};
  border: 1px solid ${({ theme }) => theme.colors.colours.default.transparent.value};

  &:hover {
    ${({ isNegative, theme }) =>
      isNegative &&
      css`
        /* box-shadow: inset 100px 1px ${theme.colors.colours.overlay['digital-black'][5].value}; */
        opacity: 0.95;
      `};
    ${({ isNegative }) =>
      !isNegative &&
      css`
        opacity: 0.95;
      `};
  }
  &:active {
    ${({ isNegative, theme }) =>
      isNegative &&
      css`
        /* background-color: ${theme.colors.colours.overlay['digital-black'][10].value}; */
        opacity: 0.9;
      `};
    ${({ isNegative }) =>
      !isNegative &&
      css`
        opacity: 0.9;
      `};
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
      `};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default.white.value : theme.colors.colours.default['digital-black'].value};
  border: 1px solid
    ${({ isNegative, theme }) =>
      isNegative ? theme.colors.colours.default.white.value : theme.colors.colours.default['digital-black'].value};
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
`;

export const StyledTransparentButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};

  color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default.white.value : theme.colors.colours.default['digital-black'].value};
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
  /* :focus-visible {
    outline: 0;
    background-color: ${({ theme }) => theme.colors.colours.overlay['digital-black'][10].value};
  } */
`;

export const StyledFloaterButton = styled(StyledButton)`
  background-color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default.white.value : theme.colors.colours.default['digital-black'].value};
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.default.white.value};
  border: 1px solid
    ${({ isNegative, theme }) =>
      isNegative
        ? theme.colors.colours.default['digital-black'].value
        : theme.colors.colours.default.transparent.value};
  border-radius: ${({ sizing }) => `${parseInt(sizing, 10) / 2}px`};
  position: absolute;
  bottom: ${({ theme, showButton }) => (showButton ? theme.sizes.m.value : '-36px')};
  transition: bottom 0.25s;
  right: ${({ theme }) => theme.sizes.m.value};
  z-index: 100;
  &:hover {
    background-color: ${({ isNegative, theme }) =>
      isNegative ? theme.colors.colours.support[40].value : theme.colors.colours.support[80].value};
  }

  @media screen and (max-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    bottom: ${({ theme, showButton }) => (showButton ? theme.sizes.s.value : '-36px')};
    right: ${({ theme }) => theme.sizes.s.value};
  }
`;

export const StyledLinkButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.colors.colours.default.white.value : theme.colors.colours.default['digital-black'].value};
  text-decoration: underline;
  padding: 0;
  height: auto;
  &:hover {
    background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
  }
`;
