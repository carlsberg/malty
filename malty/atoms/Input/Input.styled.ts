import styled, { css } from 'styled-components';
import { Sizes } from './Input.types';

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.font.fontFamily.text};
`;

export const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.default.value};
  font-size: 14px;
  padding-bottom: 8px;
  font-weight: bold;
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: 10px;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0;
  font-family: Montserrat;
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
      ${({ isIconLeft, addLeft }) => {
        const pos = addLeft && isIconLeft ? '104px' : '16px';
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
  size?: Sizes;
  hasIcon?: boolean;
  isIconLeft?: boolean;
  addRight?: boolean;
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
    padding: 16px;
    flex-grow: unset;
    width: 56px;
    text-align: center;
  }
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  ${({ hasIcon, isIconLeft, addRight }) => {
    const rightPadding = isIconLeft ? '48px' : '16px';
    let leftPadding = isIconLeft ? '16px' : '48px';
    if (addRight) leftPadding = '64px';
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

export const StyledButton = styled.button<{
  size?: Sizes;
}>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: 1px solid #d7e0e2;
  background: ${({ theme }) => theme.color.button.primaryNegativeDefault.value};
  display: flex;
  padding: 16px;
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
  height?: Sizes;
}>`
  height: ${({ height }) => height}px;
  width: 91px;
  border: 1px solid #D7E0E2;
  border-right: 0;
  padding 8px 16px;
  text-align: center;
  appearance: none;
  position: relative;
`;

export const StyledOption = styled.option<{
  height?: Sizes;
}>`
  height: ${({ height }) => height}px;
`;
