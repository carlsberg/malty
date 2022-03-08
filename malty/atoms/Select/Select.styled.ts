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
  font-family: ${({ theme }) => theme.typography.desktop.text.small_default['font-family'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.small_default['line-height'].value};
  padding-bottom: ${({ theme }) => theme.sizes['2xs'].value};
  font-weight: bold;
  display: block;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
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
  display: block;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
`;

export const StyledButton = styled.button<{
  disabled?: boolean;
  height: number;
  isError?: boolean;
  isActive?: boolean;
  selectStyle: string;
  open?: boolean;
}>`
  text-align: left;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  padding: 0 ${({ theme }) => theme.sizes.s.value};
  height: ${({ height }) => height}px;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  transition-property: border-color, color;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[60].value};
  border: 1px solid ${({ theme }) => theme.colors.colours.support[60].value};
  background: ${({ theme }) => theme.colors.colours.default.white.value};
  ${({ selectStyle, theme }) =>
    selectStyle === 'inline' &&
    css`
      border: 0 transparent;
      background: ${theme.colors.colours.default.white.value};
      width: fit-content;
      padding: 0;
      height: 28px;
      padding: 0 ${theme.sizes.xs.value};
      &:hover {
        background-color: ${theme.colors.colours.overlay['digital-black'][5].value};
      }
      &:focus {
        background-color: ${theme.colors.colours.overlay['digital-black'][10].value};
      }
    `}

  ${({ isError, theme }) =>
    isError &&
    css`
      border: 1px solid ${theme.colors.colours.system.fail.value};
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
      border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
      color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    `}
  ${({ disabled }) =>
    disabled
      ? css`
          border-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
          color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
          background-color: transparent !important;
        `
      : css`
          &:hover,
          &:focus {
            outline: none;
          }
          &:hover {
            border-color: ${({ theme }) => theme.colors.colours.support[60].value};
          }
          &:focus {
            border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
            color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
          }
        `}
`;

export const StyledOptionsWrapper = styled.ul<{
  height: number;
  selectStyle?: string;
  isOpen?: boolean;
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  width: 100%;
  margin-top: 0;
  background: ${({ theme }) => theme.colors.colours.default.white.value};
  overflow-y: auto;
  padding: 0;
  z-index: 2;
  transform-origin: top center;
  visibility: hidden;
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  border-top: 0;
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
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.sizes.s.value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  transition: all 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  }
  ${({ selected }) =>
    selected &&
    css`
      font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-weight'].value};
      font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-family'].value};
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
  transition: transform 0.2s linear;
  ${({ selectStyle }) =>
    selectStyle === 'inline' &&
    css`
      margin-left: ${({ theme }) => theme.sizes.xs.value};
    `}
  ${({ open }) =>
    open &&
    css`
      transform: rotate(-180deg);
      transition: transform 0.2s linear;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      fill: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
`;
export const StyledCheck = styled(Check)<{
  selectStyle?: string;
}>`
  ${({ selectStyle }) =>
    selectStyle === 'inline' &&
    css`
      margin-left: ${({ theme }) => theme.sizes.s.value};
    `}
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  svg {
    margin-right: ${({ theme }) => theme.sizes['4xs'].value};
  }
`;
export const StyledSelectedOptionsWrapper = styled.div`
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: calc(100% - 36px);
`;
