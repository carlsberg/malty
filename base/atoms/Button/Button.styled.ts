import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Icon } from '../Icon/Icon';
import { StyledIcon } from '../Icon/Icon.styled';
import { Sizes as IconSizes, SizesTypes as IconSizesTypes } from '../Icon/Icon.types';

export const StyledButtonIcon = styled(Icon)<{ hasText: boolean }>`
  margin-left: ${({ hasText }) => (hasText ? '10px' : 0)};
`;

export const StyledIconPlaceHolder = styled.div<{ hasText: boolean }>`
  display: inline-block;
  height: ${() => IconSizes[IconSizesTypes.Medium]}px;
  width: ${() => IconSizes[IconSizesTypes.Medium]}px;
  margin-left: ${({ hasText }) => (hasText ? '10px' : 0)};
`;

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
  font-family: ${theme.fontFamily.text};
  border: none;

  &:hover,
  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: default;
    color: ${theme.colors.white};
    background-color: ${theme.colors.disabled};
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
  background-color: ${({ isWhite }) => (isWhite ? theme.colors.white : theme.colors.primary)};
  color: ${({ isWhite }) => (isWhite ? theme.colors.primary : theme.colors.white)};
  border: 1px solid ${({ isWhite }) => (isWhite ? theme.colors.primary : theme.colors.transparent)};
  &:hover {
    background-color: ${({ isWhite }) => (isWhite ? theme.colors.supportLight : theme.colors.support)};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${theme.colors.transparent};
  color: ${({ isWhite }) => (isWhite ? theme.colors.white : theme.colors.primary)};
  border: 1px solid ${({ isWhite }) => (isWhite ? theme.colors.white : theme.colors.primary)};
  &:hover {
    background-color: ${({ isWhite }) => (isWhite ? theme.colors.support : theme.colors.supportLight)};
  }
`;

export const StyledFloaterButton = styled(StyledButton)`
  background-color: ${({ isWhite }) => (isWhite ? theme.colors.white : theme.colors.primary)};
  color: ${({ isWhite }) => (isWhite ? theme.colors.primary : theme.colors.white)};
  border: 1px solid ${({ isWhite }) => (isWhite ? theme.colors.primary : theme.colors.transparent)};
  border-radius: ${({ sizing }) => `${sizing / 2}px`};
  &:hover {
    background-color: ${({ isWhite }) => (isWhite ? theme.colors.supportLight : theme.colors.support)};
  }
`;

export const StyledLinkButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({ isWhite }) => (isWhite ? theme.colors.white : theme.colors.primary)};
  text-decoration: underline;
  padding: 0;
  height: auto;
  &:hover {
    background-color: transparent;
  }
`;
