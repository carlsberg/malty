import Check from '@carlsberggroup/malty.icons.check';
import ChevronDown from '@carlsberggroup/malty.icons.chevron-down';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {opacity: 0;}
     50% {opacity: 0.5;}
    100% {opacity: 1;}
`;
const fadeOut = keyframes`
    0% {opacity: 1;}
    100% {opacity: 0;}
`;
export const StyledButtonContainer = styled.div<{
  selectStyle: string;
}>`
  font-family: inherit;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  position: relative;
  ${({ selectStyle }) =>
    selectStyle === 'inline' &&
    css`
      width: fit-content;
    `}
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
export const StyledSuccess = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.color.system.successStrong.value};
  font-size: ${({ theme }) => theme.typography.information.tiny['font-size'].value}px;
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.information.tiny['line-height'].value}px;
  letter-spacing: 0;
`;

export const StyledButton = styled.button<{
  disabled?: boolean;
  height: number;
  isError?: boolean;
  isSuccess?: boolean;
  isActive?: boolean;
  selectStyle: string;
  open?: boolean;
}>`
  text-align: left;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  padding: 0 16px;
  height: ${({ height }) => height}px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  transition-property: border-color, color;
  color: ${({ isActive, theme }) =>
    isActive ? theme.color.button.primaryDefault.value : theme.color.button.primaryDisable.value};
  border: 1px solid ${({ theme }) => theme.color.form.calendarAvailable.value};
  background: ${({ theme }) => theme.color.white.value};
  ${({ selectStyle, theme }) =>
    selectStyle === 'inline' &&
    css`
      border: 0px transparent;
      background: ${theme.color.button.primaryNegativeDefault.value};
      width: fit-content;
      padding: 0;
      height: 28px;
      padding: 0 12px;
      &:hover {
        background-color: rgba(33, 40, 51, 0.05);
      }
      &:focus {
        background-color: ${theme.color.overlay.opacity10.default.value};
      }
    `}
  ${({ isSuccess, theme }) =>
    isSuccess &&
    css`
      border: 1px solid ${theme.color.system.successStrong.value};
    `}
     ${({ isError, theme }) =>
    isError &&
    css`
      border: 1px solid ${theme.color.system.failStrong.value};
    `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  ${({ open }) =>
    open &&
    css`
      border-color: ${({ theme }) => theme.color.form.calendarSelect.value};
      color: ${({ theme }) => theme.color.form.calendarSelect.value};
      border-bottom: 0;
    `}
  ${({ disabled }) =>
    disabled
      ? css`
          border-color: ${({ theme }) => theme.color.system.disabledDefault.value};
          color: ${({ theme }) => theme.color.system.disabledDefault.value};
          background-color: transparent !important;
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
  selectStyle?: string;
  isOpen?: boolean;
}>`
  position: absolute;
  background-color: white;
  width: 100%;
  margin-top: 0;
  background: white;
  overflow-y: auto;
  padding: 0;
  z-index: 2;
  transform-origin: top center;
  visibility: hidden;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.color.form.calendarSelect.value};
  animation-name: ${fadeOut};
  opacity: 0;
  transition: all 0.3s ease-in-out;
  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: visible;
      display: block !important;
      animation-name: ${fadeIn};
      animation-duration: 0.3s;
      opacity: 1;
    `}
  ${({ selectStyle }) =>
    selectStyle === 'inline' &&
    css`
      width: 100%;
      max-width: 400px;
      min-width: max-content;
    `}
`;
export const StyledValuesName = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledOption = styled.li<{
  disabled?: boolean;
  height: number;
  selected?: boolean;
  selectStyle?: string;
}>`
  list-style-type: none;
  cursor: pointer;
  height: ${({ height }) => height}px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  color: #212833;

  &:hover {
    background-color: ${({ theme }) => theme.color.support.support20.value};
  }
  ${({ selected }) =>
    selected &&
    css`
      font-weight: bold;
    `}
  ${({ selectStyle }) =>
    selectStyle === 'inline' &&
    css`
      max-width: 400px;
      box-sizing: border-box;
    `}
`;
export const StyledChevronDown = styled(ChevronDown)<{
  disabled?: boolean;
  open?: boolean;
  selectStyle?: string;
}>`
  transition: transform 0.3s linear;
  ${({ selectStyle }) =>
    selectStyle === 'inline' &&
    css`
      margin-left: 12px;
    `}
  ${({ open }) =>
    open &&
    css`
      transform: rotate(-180deg);
      transition: transform 0.3s linear;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      fill: ${({ theme }) => theme.color.system.disabledDefault.value};
    `}
`;
export const StyledCheck = styled(Check)<{
  selectStyle?: string;
}>`
  ${({ selectStyle }) =>
    selectStyle === 'inline' &&
    css`
      margin-left: 16px;
    `}
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  svg {
    margin-right: 4px;
  }
`;
export const StyledSelectedOptionsWrapper = styled.div`
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 36px);
`;
