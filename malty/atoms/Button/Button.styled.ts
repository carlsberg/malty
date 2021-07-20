import { StyledIcon } from '@carlsberg/malty.atoms.icon';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<{
  hasText: boolean;
  hasIcon: boolean;
  isWhite?: boolean;
  sizing: number;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: ${({ sizing }) => `${sizing}px`};
  font-size: 14px;
  font-weight: bold;
  transition: 0.25s ease-in-out;
  transition-property: background-color, color;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.fontFamily.text};
  border: none;
  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.white.value};
    background-color: ${({ theme }) => theme.color.button.primaryDisable.value};
  }

  ${({ hasText, hasIcon, sizing }) =>
    !hasText &&
    hasIcon &&
    css`
      padding: 0;
      justify-content: center;
      width: ${sizing}px;
    `};

  ${({ hasText, hasIcon }) =>
    hasText &&
    hasIcon &&
    css`
      ${StyledIcon} {
        margin-left: 16px;
      }
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
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeHover.value : theme.color.button.primaryHover.value};
  }
`;

export const StyledFloaterButton = styled(StyledButton)`
  background-color: ${({ isWhite, theme }) =>
    isWhite ? theme.color.white.value : theme.color.button.primaryDefault.value};
  color: ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.white.value)};
  border: 1px solid
    ${({ isWhite, theme }) => (isWhite ? theme.color.button.primaryDefault.value : theme.color.transparent.value)};
  border-radius: ${({ sizing }) => `${sizing / 2}px`};
  &:hover {
    background-color: ${({ isWhite, theme }) =>
      isWhite ? theme.color.button.primaryNegativeHover.value : theme.color.button.primaryHover.value};
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
