import { space, SpaceProps } from '@carlsberggroup/malty.utils.space';
import styled, { css, keyframes } from 'styled-components';

const animateShow = keyframes`
  from {
    opacity: .4;
  }
  to {
    opacity: 1;
  }
`;

export const StyledInputContainer = styled.div<SpaceProps>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  ${space}
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

export const StyledCharacterCounter = styled.div<{ $disabled?: boolean; $isError: boolean }>`
  position: absolute;
  right: 16px;
  background-color: ${({ theme }) => theme.colors.colours.support[60].value};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
  border-radius: 7px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  height: 14px;
  font-weight: bold;
  padding: 0 ${({ theme }) => theme.sizes['3xs'].value};
  ${({ $isError }) =>
    $isError &&
    css`
      background-color: ${({ theme }) => theme.colors.colours.system.fail.value};
    `}
  ${({ $disabled }) =>
    $disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
`;

export const StyledInputWrapper = styled.div<{
  isIconLeft?: boolean;
  $isIconRight: boolean;
  addLeft?: boolean;
  $showCharacterCounter: boolean;
}>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  > span {
    width: 100% !important;
  }

  > div:first-child {
    align-items: center;
  }

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.clear-trigger {
      opacity: 0.7;
      ${({ theme, $isIconRight, $showCharacterCounter }) => {
        let clearableIconPositionRight = 16;

        if ($isIconRight && $showCharacterCounter) {
          clearableIconPositionRight += parseInt(`${theme.sizes['4xl'].value.replace('px', '')}`, 10);
        } else if ($isIconRight || $showCharacterCounter) {
          clearableIconPositionRight += parseInt(`${theme.sizes.xl.value.replace('px', '')}`, 10);
        }

        return css`
          right: ${clearableIconPositionRight}px;
        `;
      }}
    }

    &:not(.clear-trigger) {
      ${({ theme, isIconLeft, addLeft, $showCharacterCounter }) => {
        const pos = isIconLeft ? 'left' : 'right';
        let value = '';

        if (addLeft && isIconLeft) {
          value = `${
            parseInt(`${theme.sizes['5xl'].value.replace('px', '')}`, 10) +
            parseInt(`${theme.sizes.s.value.replace('px', '')}`, 10)
          }px`;
        } else if (!isIconLeft && $showCharacterCounter) {
          value = `${parseInt(`${theme.sizes['2xl'].value.replace('px', '')}`, 10)}px`;
        } else {
          value = `${theme.sizes.s.value}`;
        }

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
  $showCharacterCounter?: boolean;
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
    text-align: center;
    vertical-align: top;
    padding: 0;
    flex: 1;

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

  ${({ isError, readOnly }) =>
    !isError &&
    !readOnly &&
    css`
      &:hover {
        border-color: ${({ theme }) => theme.colors.colours.information.indirect.value};
      }
      &:focus {
        border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
        color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
        + ${StyledCharacterCounter} {
          background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
        }
      }
    `}

  ${({ theme, hasIcon, isIconLeft, addRight, hasClearable, $showCharacterCounter }) => {
    if (!hasIcon && !hasClearable && !$showCharacterCounter) {
      return css`
        padding: 0 ${theme.sizes.s.value};
      `;
    }

    const leftPadding = isIconLeft && hasIcon ? `${theme.sizes['2xl'].value}` : `${theme.sizes.s.value}`;

    let rightPadding = `${theme.sizes.s.value}`;
    const hasRightIcon = hasIcon && addRight;
    const hasAllRightElements = hasRightIcon && hasClearable && $showCharacterCounter;
    const hasTwoRightElements =
      (hasRightIcon && hasClearable) ||
      (hasRightIcon && $showCharacterCounter) ||
      (hasClearable && $showCharacterCounter);

    if (hasAllRightElements) {
      rightPadding = `${
        parseInt(`${theme.sizes['5xl'].value.replace('px', '')}`, 10) +
        parseInt(`${theme.sizes.l.value.replace('px', '')}`, 10)
      }px`;
    } else if (hasTwoRightElements) {
      rightPadding = `${
        parseInt(`${theme.sizes['5xl'].value.replace('px', '')}`, 10) +
        parseInt(`${theme.sizes.s.value.replace('px', '')}`, 10)
      }px`;
    } else {
      rightPadding = `${theme.sizes['3xl'].value}`;
    }

    return css`
      padding: 0 ${rightPadding} 0 ${leftPadding};
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
  disabled?: boolean;
}>`
  cursor: pointer;
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
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background-color: ${({ theme }) => theme.colors.colours.default.transparent.value};
      svg {
        fill: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
      }
    `}
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
