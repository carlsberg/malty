import styled, { css, keyframes } from 'styled-components';
import { IconPosition } from './Button.types';

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
  isWhite?: boolean;
  fullWidth?: boolean;
  sizing: string;
  horizontalPadding: string;
  fontSize: string;
  iconSize: string;
  iconPos: IconPosition;
  showButton: boolean;
}>`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ horizontalPadding }) => `0 ${horizontalPadding}px`};
  height: ${({ sizing }) => `${sizing}px`};
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  border: none;
  gap: ${({ theme }) => theme.variables.button.icon.margin.value}px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  flex-direction: ${({ iconPos }) => (IconPosition[iconPos] === IconPosition.Right ? 'row' : 'row-reverse')};
  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.white.value};
    background-color: ${({ theme }) => theme.color.button.primaryDisable.value};
    &:hover {
      color: ${({ theme }) => theme.color.white.value};
      background-color: ${({ theme }) => theme.color.button.primaryDisable.value};
    }
  }

  .text-container {
    display: flex;
    align-items: center;
    gap: 16px;
    opacity: 1;
    &.invisible {
      opacity: 0;
    }
  }

  .secondary-container {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 16px;
    animation: ${animateShow} 0.25s linear;
  }

  svg {
    height: ${({ iconSize }) => `${iconSize}px`};
    width: ${({ iconSize }) => `${iconSize}px`};
  }

  ${({ hasText, hasIcon, sizing }) =>
    !hasText &&
    hasIcon &&
    css`
      padding: 0;
      justify-content: center;
      width: ${sizing}px;
    `};
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.color.button.primaryNegativeDefault.value : theme.color.button.primaryDefault.value};
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.white.value)};
  border: 1px solid
    ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.transparent.value)};
  &:hover {
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeHover.value : theme.color.button.primaryHover.value};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.color.transparent.value};
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value)};
  border: 1px solid
    ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeDefault.value : theme.color.button.primaryDefault.value};
  &:hover {
    background-color: ${({ theme }) => theme.color.transparent.value};
    color: ${({ theme }) => theme.color.button.primaryHover.value};
    border: 1px solid ${({ theme }) => theme.color.button.primaryHover.value};
  }
`;

export const StyledTransparentButton = styled(StyledButton)`
  background-color: transparent;
  &.active {
    background-color: ${({ theme }) => theme.color.support.support40.value};
  }
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value)};
  &:hover {
    background-color: ${({ theme }) => theme.color.overlay.opacity10.default.value};
  }
  :focus-visible {
    outline: 0;
    background-color: ${({ theme }) => theme.color.overlay.opacity10.default.value};
  }
`;

export const StyledFloaterButton = styled(StyledButton)`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value};
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.white.value)};
  border: 1px solid
    ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.transparent.value)};
  border-radius: ${({ sizing }) => `${parseInt(sizing, 10) / 2}px`};
  position: absolute;
  bottom: ${({ showButton }) => (showButton ? '24px' : '-36px')};
  transition: bottom 0.25s;
  right: 24px;
  z-index: 100;
  &:hover {
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeHover.value : theme.color.button.primaryHover.value};
  }

  @media screen and (max-width: 576px) {
    bottom: ${({ showButton }) => (showButton ? '16px' : '-36px')};
    right: 16px;
  }
`;

export const StyledLinkButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value)};
  text-decoration: underline;
  padding: 0;
  height: auto;
  &:hover {
    background-color: ${({ theme }) => theme.color.transparent.value};
  }
`;
