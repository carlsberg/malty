import styled, { css } from 'styled-components';
import { Sizes } from './Input.types';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.fontFamily.text};
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.default.value};
  font-size: 12px;
  padding-bottom: 8px;
  font-weight: bold;
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: 12px;
  font-weight: bold;
  padding-top: 6px;
`;

export const StyledInputWrapper = styled.div<{
  isIconLeft?: boolean;
}>`
  position: relative;
  display: flex;
  svg {
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
  border: 1px solid ${({ theme }) => theme.color.form.calendarAvailable.value};
  color: ${({ theme }) => theme.color.information.indirect.value};
  height: ${({ size }) => size}px;
  ::placeholder {
    opacity: 0.8;
    color: ${({ theme }) => theme.color.information.indirect.value};
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
          background-color: ${({ theme }) => theme.color.form.formSelect.value};
        `
      : css`
          &:hover,
          &:focus {
            outline: none;
          }
          &:hover {
            border-color: ${({ theme }) => theme.color.information.indirect.value};
          }
          &:focus {
            border-color: ${({ theme }) => theme.color.form.calendarSpecial.value};
            color: ${({ theme }) => theme.color.form.calendarSpecial.value};
          }
        `}
`;
