import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { Sizes as IconSizes, SizesTypes as IconSizesTypes } from '../icon/icon.types';

export const IconWrapper = styled.div<{ hasText: boolean }>`
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
  isInverse?: boolean;
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
  &:hover {
    background-color: ${theme.colors.support};
  }

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
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: ${({ isInverse }) => (isInverse ? theme.colors.white : theme.colors.primary)};
  color: ${({ isInverse }) => (isInverse ? theme.colors.primary : theme.colors.white)};
  border: 1px solid ${({ isInverse }) => (isInverse ? theme.colors.primary : theme.colors.transparent)};
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: ${theme.colors.transparent};
  color: ${({ isInverse }) => (isInverse ? theme.colors.white : theme.colors.primary)};
  border: 1px solid ${({ isInverse }) => (isInverse ? theme.colors.white : theme.colors.primary)};
`;

export const StyledFloaterButton = styled(StyledButton)`
  background-color: ${({ isInverse }) => (isInverse ? theme.colors.white : theme.colors.primary)};
  color: ${({ isInverse }) => (isInverse ? theme.colors.primary : theme.colors.white)};
  border: 1px solid ${({ isInverse }) => (isInverse ? theme.colors.primary : theme.colors.transparent)};
  border-radius: ${({ sizing }) => `${sizing / 2}px`};
`;

export const StyledLinkButton = styled(StyledButton)`
  background-color: transparent;
  color: ${({ isInverse }) => (isInverse ? theme.colors.white : theme.colors.primary)};
  text-decoration: underline;
  padding: 0;
  height: auto;
  &:hover {
    background-color: transparent;
  }
`;
