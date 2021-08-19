import styled, { css } from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.default.value};
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  padding-bottom: ${({ theme }) => theme.variables.input.label.bottomPadding.value}px;
  font-weight: bold;
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: ${({ theme }) => theme.typography.information.tiny['line-height'].value}px;
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.text.small['line-height'].value};
  letter-spacing: 0;
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
`;

export const StyledInputWrapper = styled.div<{
  isIconLeft?: boolean;
  clearable?: boolean;
  addRight?: boolean;
  addLeft?: boolean;
}>`
  position: relative;
  display: flex;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.clear-trigger {
      opacity: 0.7;
      ${({ clearable, isIconLeft, addRight }) => {
        let right = 16;
        if (!isIconLeft) right += 24;
        if (addRight) right += 32;
        if (!isIconLeft && addRight) right += 8;
        return css`
          ${clearable || addRight ? `right: ${right}px` : ''}
        `;
      }}
    }

    &:not(.clear-trigger) {
      ${({ theme, isIconLeft, addLeft }) => {
        const pos =
          addLeft && isIconLeft
            ? `${theme.variables.input.iconPadding.value}px`
            : `${theme.variables.input.padding.value}px`;
        return css`
          ${isIconLeft ? 'left' : 'right'}: ${pos};
        `;
      }}
    }

    &.quantity-control {
      left: unset;
    }
  }
`;

export const StyledInput = styled.input<{
  disabled?: boolean;
  size: number;
  hasIcon?: boolean;
  isIconLeft?: boolean;
  addRight?: boolean;
  isError?: boolean;
}>`
  flex: 1 1 auto;
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.color.system.failStrong.value : theme.color.form.calendarAvailable.value};
  color: ${({ theme }) => theme.color.information.indirect.value};
  height: ${({ size }) => size}px;
  ::placeholder {
    opacity: 0.8;
    color: ${({ theme }) => theme.color.information.indirect.value};
  }
  /* clears the ‘X’ from Internet Explorer */
  &[type='search']::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }
  &[type='search']::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
  /* clears the ‘X’ from Chrome */
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    display: none;
  }
  &[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    padding: 0 ${({ theme }) => theme.variables.input.padding.value}px;
    flex-grow: unset;
    width: ${({ size }) => size}px;
    text-align: center;
    height: unset;
  }
  &[type='tel'] {
    height: unset;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  ${({ theme, hasIcon, isIconLeft, addRight }) => {
    const rightPadding = isIconLeft
      ? `${theme.variables.input.largePadding.value}px`
      : `${theme.variables.input.padding.value}px`;
    let leftPadding = isIconLeft
      ? `${theme.variables.input.padding.value}px`
      : `${theme.variables.input.largePadding.value}px`;
    if (addRight) leftPadding = `${theme.variables.input.leftPadding.value}px`;
    return hasIcon
      ? css`
          padding: 0 ${leftPadding} 0 ${rightPadding};
        `
      : css`
          padding: 0 ${theme.variables.input.padding.value}px;
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

export const StyledButton = styled.button<{
  size?: string;
  isError?: boolean;
}>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.color.system.failStrong.value : theme.color.button.primaryNegativeHover.value};
  background: ${({ theme }) => theme.color.button.primaryNegativeDefault.value};
  display: flex;
  padding: ${({ theme }) => theme.variables.input.padding.value}px;
  justify-content: center;
  align-items: center;

  &:first-child {
    border-right: 0;
  }
  &:last-child {
    border-left: 0;
  }
`;

export const StyledSelect = styled.select<{
  height?: string;
  isError?: boolean;
}>`
  height: ${({ height }) => height}px;
  width: ${({ theme }) => theme.variables.input.select.width.value}px;
  border: 1px solid ${({ theme, isError }) =>
    isError ? theme.color.system.failStrong.value : theme.color.button.primaryNegativeHover.value};
  border-right: 0;
  padding ${({ theme }) => theme.variables.input.label.bottomPadding.value}px ${({ theme }) =>
  theme.variables.input.padding.value}px;
  text-align: center;
  appearance: none;
  position: relative;
`;

export const StyledOption = styled.option<{
  height?: string;
}>`
  height: ${({ height }) => height}px;
`;
