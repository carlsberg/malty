import ChevronDown from '@carlsberggroup/malty.icons.chevron-down';
import styled, { css } from 'styled-components';
export const StyledButtonContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
`;

export const StyledLabel = styled.label<{
  disabled?: boolean;
}>`
  color: ${({ theme }) => theme.color.default.value};
  font-size: ${({ theme }) => theme.typography.information.small['font-size'].value}px;
  line-height: ${({ theme }) => theme.typography.information.small['line-height'].value}px;
  padding-bottom: ${({ theme }) => theme.variables.input.label.bottomPadding.value}px;
  font-weight: bold;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.system.disabledDefault.value};
    `}
`;

export const StyledError = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: ${({ theme }) => theme.typography.information.tiny['font-size'].value}px;
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.information.tiny['line-height'].value}px;
  letter-spacing: 0;
`;

/*
export const StyledSelectWrapper = styled.div<{
  size?: number;
}>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  height: ${({ size }) => size}px;
`;

export const StyledSelect = styled.select<{
  disabled?: boolean;
  height: number;
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
  height: ${({ height }) => height}px;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url(...);

  &::-ms-expand {
    display: none;
  }

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

export const StyledOption = styled.option<{
  height?: number;
}>`
  height: ${({ height }) => height}px;
  background: white;
`;
*/

export const StyledButton = styled.button<{
  disabled?: boolean;
  height: number;
  isError?: boolean;
  isActive?: boolean;
  selectStyle: string;
}>`
  padding: 0 16px;
  height: ${({ height }) => height}px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  color: ${({ isActive, theme }) =>
    isActive ? theme.color.button.primaryDefault.value : theme.color.button.primaryDisable.value};
  ${({ selectStyle, isError, theme }) =>
    selectStyle === 'inline'
      ? css`
          border: 0px transparent;
          background: ${theme.color.button.primaryNegativeDefault.value};
        `
      : css`
          border: 1px solid ${isError ? theme.color.system.failStrong.value : theme.color.form.calendarAvailable.value};
          background: ${theme.color.white.value};
        `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  ${({ disabled }) =>
    disabled
      ? css`
          border-color: ${({ theme }) => theme.color.system.disabledDefault.value};
        `
      : css`
          &:hover,
          &:focus {
            outline: none;
          }
          &:hover {
            border-color: ${({ theme }) => theme.color.support.support60.value};
          }
          &:focus {
            border-color: ${({ theme }) => theme.color.form.calendarSelect.value};
            color: ${({ theme }) => theme.color.form.calendarSelect.value};
          }
        `}
`;

export const StyledOptionsWrapper = styled.ul<{
  height: number;
}>`
  position: absolute;
  background-color: $white;
  width: calc(100% - 2px);
  margin-top: ${({ height }) => height}px;
  background: white;
  overflow-y: auto;
  padding: 0;
  z-index: 2;
  display: block;
  transform-origin: top center;
  transition: all 200ms;

  box-sizing: border-box;
`;

export const StyledOption = styled.li<{
  disabled?: boolean;
  height: number;
}>`
  list-style-type: none;
  cursor: pointer;
  height: ${({ height }) => height}px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  &:hover {
    background-color: ${({ theme }) => theme.color.support.support20.value};
  }
`;
export const StyledChevronDown = styled(ChevronDown)<{
  disabled?: boolean;
}>`
  ${({ disabled }) =>
    disabled &&
    css`
      border-color: ${({ theme }) => theme.color.system.disabledDefault.value};
    `}
`;
