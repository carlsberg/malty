import styled, { css } from 'styled-components';

export const StyledInputContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.default.value};
  font-size: ${({ theme }) => theme.typography.information.small['font-size'].value}px;
  line-height: ${({ theme }) => theme.typography.information.small['line-height'].value}px;
  padding-bottom: ${({ theme }) => theme.variables.input.label.bottomPadding.value}px;
  font-weight: bold;
`;

export const StyledError = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: ${({ theme }) => theme.typography.information.tiny['font-size'].value}px;
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.information.tiny['line-height'].value}px;
  letter-spacing: 0;
`;

export const StyledInputWrapper = styled.div<{
  isIconLeft?: boolean;
  clearable?: boolean;
  addRight?: boolean;
  addLeft?: boolean;
  size?: number;
}>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  height: ${({ size }) => size}px;

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
      top: calc(50% - 1px);
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
  display: inline-flex;
  box-sizing: border-box;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.color.system.failStrong.value : theme.color.form.calendarAvailable.value};
  color: ${({ theme }) => theme.color.button.primaryDefault.value};
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
    flex-grow: unset;
    width: ${({ size }) => size}px;
    text-align: center;
    vertical-align: top;
    padding: 0;
    flex: 1 1 100%;
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
  box-sizing: border-box;
  background: ${({ theme }) => theme.color.button.primaryNegativeDefault.value};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 0px;
  top: 0;

  &:first-child {
    border-right: 0;
  }
  &:last-child {
    border-left: 0;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.color.button.primaryDisable.value};
  }
`;

export const StyledSelect = styled.select<{
  size?: number;
  height?: string;
  isError?: boolean;
}>`
  vertical-align: top;
  display: inline-flex;
  box-sizing: border-box;
  height: ${({ height }) => height}px;
  width: ${({ theme }) => theme.variables.input.select.width.value}px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.color.system.failStrong.value : theme.color.button.primaryNegativeHover.value};
  border-right: 0;
  text-align: center;
  appearance: none;
  position: relative;
  &:disabled {
    background-color: ${({ theme }) => theme.color.form.formSelect.value};
  }
`;

export const StyledOption = styled.option<{
  height?: string;
}>`
  height: ${({ height }) => height}px;
`;
