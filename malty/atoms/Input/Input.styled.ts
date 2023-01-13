import styled, { css, keyframes } from 'styled-components';

const animateShow = keyframes`
  from {
    opacity: .4;
  }
  to {
    opacity: 1;
  }
`;
export const StyledInputContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const StyledError = styled.label`
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
`;

export const StyledHint = styled.label<{
  disabled?: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
  color: ${({ theme }) => theme.colors.colours.support[60].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
  margin-top: ${({ theme }) => theme.sizes['4xs'].value};
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
`;

export const StyledInputWrapper = styled.div<{
  isIconLeft?: boolean;
  clearable?: boolean;
  addRight?: boolean;
  addLeft?: boolean;
}>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  > span {
    width: 100% !important;
  }
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
        const pos = isIconLeft ? 'left' : 'right';
        const value =
          addLeft && isIconLeft
            ? `${
                parseInt(`${theme.sizes['5xl'].value.replace('px', '')}`, 10) +
                parseInt(`${theme.sizes.s.value.replace('px', '')}`, 10)
              }px`
            : `${theme.sizes.s.value}`;
        return css`
          ${pos}: ${value};
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
  readOnly?: boolean;
  size: number;
  hasIcon?: boolean;
  hasClearable?: boolean;
  isIconLeft?: boolean;
  addRight?: boolean;
  isError?: boolean;
  disableQuantityInput?: boolean;
}>`
  border-radius: 0;
  width: 100%;
  flex: 1 1 auto;
  display: inline-flex;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.colours.system.fail.value : theme.colors.colours.support[40].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  height: ${({ size }) => size}px;
  ::placeholder {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.colours.information.indirect.value};
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
  &.quanity-input {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    flex-grow: unset;
    width: ${({ size }) => size}px;
    text-align: center;
    vertical-align: top;
    padding: 0;
    flex: 1 1 100%;

    ${({ disableQuantityInput }) =>
      disableQuantityInput &&
      css`
        pointer-events: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
      `}
  }
  &.quanity-input::-webkit-inner-spin-button,
  &.quanity-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:hover,
  &:focus,
  &:focus-visible {
    outline: none;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.colours.information.indirect.value};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  }

  ${({ theme, hasIcon, isIconLeft, addRight, hasClearable }) => {
    const leftPadding =
      isIconLeft && hasIcon ? `${theme.sizes['2xl'].value}` : `${theme.sizes.s.value}`;
    let rightPadding = isIconLeft ? `${theme.sizes.s.value}` : `${theme.sizes['2xl'].value}`;
    if (addRight) rightPadding = `${theme.sizes['4xl'].value}`;
    if (hasClearable) rightPadding = `${theme.sizes['2xl'].value}`;
    return hasIcon || hasClearable
      ? css`
          padding: 0 ${rightPadding} 0 ${leftPadding};
        `
      : css`
          padding: 0 ${theme.sizes.s.value};
        `;
  }}
  ${({ disabled }) =>
    disabled &&
    css`
      &:hover,
      &:focus,
      &:focus-visible {
        outline: none;
        pointer-events: none;
        border-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
        color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      }
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
      border-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      ::placeholder {
        color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      }
    `}
  ${({ readOnly }) =>
    readOnly &&
    css`
      &:hover,
      &:focus,
      &:focus-visible {
        outline: none;
        border-color: ${({ theme }) => theme.colors.colours.support[40].value};
      }
      color: ${({ theme }) => theme.colors.colours.support[80].value};
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
      ::placeholder {
        color: ${({ theme }) => theme.colors.colours.support[80].value};
      }
    `}
`;

export const StyledButton = styled.button<{
  size?: string;
  isError?: boolean;
  readOnly?: boolean;
}>`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.colours.system.fail.value : theme.colors.colours.support[40].value};
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.colours.default.white.value};
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
    background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
    svg {
      fill: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    }
  }
  ${({ readOnly }) =>
    readOnly &&
    css`
      pointer-events: none;
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
      svg {
        fill: ${({ theme }) => theme.colors.colours.support[80].value};
      }
    `}
`;

export const StyledSelect = styled.select<{
  size?: number;
  height?: string;
  isError?: boolean;
  readOnly?: boolean;
}>`
  vertical-align: top;
  display: inline-flex;
  box-sizing: border-box;
  height: ${({ height }) => height};
  width: ${({ theme }) => theme.sizes['5xl'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.colours.system.fail.value : theme.colors.colours.support[40].value};
  border-right: 0;
  text-align: center;
  text-align-last: center;
  appearance: none;
  position: relative;
  border-radius: 0;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  &:disabled {
    color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
    border-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
  }
  ${({ readOnly }) =>
    readOnly &&
    css`
      pointer-events: none;
      color: ${({ theme }) => theme.colors.colours.support[80].value};
      background-color: ${({ theme }) => theme.colors.colours.support[20].value};
    `}
`;

export const StyledOption = styled.option<{
  height?: string;
}>`
  height: ${({ height }) => height};
`;
export const StyledClearableWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  .password-icon-show,
  .password-icon-hide {
    /* transition: all 0.3s ease-in-out !important; */
    animation: ${animateShow} 0.3s ease-in-out;
    cursor: pointer;
  }
`;
