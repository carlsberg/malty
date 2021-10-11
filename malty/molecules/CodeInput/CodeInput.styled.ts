import { StyledIcon } from '@carlsberggroup/malty.atoms.icon';
import styled, { css } from 'styled-components';

export const StyledCodeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.default.value};
  font-size: ${({ theme }) => theme.typography.text.small['font-size'].value}px;
  padding-bottom: ${({ theme }) => theme.variables.codeInput.paddingBottom.value}px;
  font-weight: bold;
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: ${({ theme }) => theme.typography.text.small['font-size'].value}px;
  font-weight: bold;
  padding-top: ${({ theme }) => theme.variables.codeInput.paddingTop.value}px;
`;

export const StyledCodeInputWrapper = styled.div<{
  isIconLeft?: boolean;
}>`
  position: relative;
  display: flex;
  ${StyledIcon} {
    position: absolute;
    top: ${({ theme }) => theme.variables.codeInput.icontTop.value}%;
    transform: translateY(${({ theme }) => theme.variables.codeInput.iconTopTransform.value}%);
    ${({ isIconLeft }) => css`
      ${isIconLeft ? 'left' : 'right'}: ${({ theme }) => theme.variables.codeInput.iconSmallPadding.value}px;
    `}
  }
`;

export const StyledCodeInput = styled.input<{
  disabled?: boolean;
  sizing?: string;
  hasIcon?: boolean;
  isIconLeft?: boolean;
}>`
  flex: 1 1 auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  border: 1px solid ${({ theme }) => theme.color.form.calendarAvailable.value};
  color: ${({ theme }) => theme.color.information.indirect.value};
  height: ${({ sizing }) => sizing}px;
  ::placeholder {
    opacity: 0.8;
    color: ${({ theme }) => theme.color.information.indirect.value};
  }

  ${({ theme, hasIcon, isIconLeft }) => {
    const rightPadding = isIconLeft
      ? `${theme.variables.codeInput.iconLargePadding.value}px`
      : `${theme.variables.codeInput.iconSmallPadding.value}px`;
    const leftPadding = isIconLeft
      ? `${theme.variables.codeInput.iconSmallPadding.value}px`
      : `${theme.variables.codeInput.iconLargePadding.value}px`;
    return hasIcon
      ? css`
          padding: 0 ${leftPadding} 0 ${rightPadding};
        `
      : css`
          padding: 0 ${theme.variables.codeInput.iconSmallPadding.value}px;
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
