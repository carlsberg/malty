import styled, { css } from 'styled-components';
import { theme } from '../../theme';
import { StyledIcon } from '../icon/icon.styled';
import { Sizes } from './input.types';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${theme.fontFamily.text};
`;

export const StyledLabel = styled.label`
  color: ${theme.colors.primary};
  font-size: 12px;
  padding-bottom: 8px;
  font-weight: bold;
`;

export const StyledError = styled.label`
  color: ${theme.colors.fail};
  font-size: 12px;
  font-weight: bold;
  padding-top: 6px;
`;

export const StyledInputWrapper = styled.div<{
  isIconLeft?: boolean;
}>`
  position: relative;
  display: flex;
  ${StyledIcon} {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${({ isIconLeft }) => css`
      ${isIconLeft ? 'left' : 'right'}: 16px;
    `}
  }
`;

export const StyledInput = styled.input<{
  disabled?: boolean;
  size?: Sizes;
  hasIcon?: boolean;
  isIconLeft?: boolean;
}>`
  flex: 1 1 auto;
  font-weight: bold;
  font-size: 14px;
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  border: 1px solid ${theme.colors.supportLight};
  color: ${theme.colors.support};
  height: ${({ size }) => size}px;
  ::placeholder {
    opacity: 0.8;
    color: ${theme.colors.support};
  }

  ${({ hasIcon, isIconLeft }) => {
    const rightPadding = isIconLeft ? '56px' : '16px';
    const leftPadding = isIconLeft ? '16px' : '56px';
    return hasIcon
      ? css`
          padding: 0 ${leftPadding} 0 ${rightPadding};
        `
      : css`
          padding: 0 16px;
        `;
  }}

  ${({ disabled }) =>
    disabled
      ? css`
          background-color: ${theme.colors.supportLighter};
        `
      : css`
          &:hover,
          &:focus {
            outline: none;
          }
          &:hover {
            border-color: ${theme.colors.support};
          }
          &:focus {
            border-color: ${theme.colors.supportDark};
            color: ${theme.colors.supportDark};
          }
        `}
`;
