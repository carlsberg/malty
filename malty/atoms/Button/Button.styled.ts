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
  font-family: ${({ theme }) => theme.fontFamily.text};
  border: none;
  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.disabled};
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
  background-color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.themeColors.primary)};
  color: ${({ isWhite, theme }) => (isWhite ? theme.themeColors.primary : theme.colors.white)};
  border: 1px solid ${({ isWhite, theme }) => (isWhite ? theme.themeColors.primary : theme.colors.transparent)};
  &:hover {
    background-color: ${({ isWhite, theme }) => (isWhite ? theme.colors.supportLight : theme.colors.support)};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.themeColors.primary)};
  border: 1px solid ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.themeColors.primary)};
  &:hover {
    background-color: ${({ isWhite, theme }) => (isWhite ? theme.colors.support : theme.colors.supportLight)};
  }
`;

export const StyledFloaterButton = styled(StyledButton)`
  background-color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.themeColors.primary)};
  color: ${({ isWhite, theme }) => (isWhite ? theme.themeColors.primary : theme.colors.white)};
  border: 1px solid ${({ isWhite, theme }) => (isWhite ? theme.themeColors.primary : theme.colors.transparent)};
  border-radius: ${({ sizing }) => `${sizing / 2}px`};
  &:hover {
    background-color: ${({ isWhite, theme }) => (isWhite ? theme.colors.supportLight : theme.colors.support)};
  }
`;

export const StyledLinkButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({ isWhite, theme }) => (isWhite ? theme.colors.white : theme.themeColors.primary)};
  text-decoration: underline;
  padding: 0;
  height: auto;
  &:hover {
    background-color: transparent;
  }
`;
