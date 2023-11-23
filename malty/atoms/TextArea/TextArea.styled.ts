import { space, SpaceProps } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';

export const StyledTextareaContainer = styled.div<SpaceProps>`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  ${space}
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
  margin-top: ${({ theme }) => theme.sizes['4xs'].value};
`;
export const StyledHint = styled.label<{
  disabled?: boolean;
}>`
  color: ${({ theme }) => theme.colors.colours.support[60].value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
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

export const StyledtextArea = styled.textarea<{
  disabled?: boolean;
  readOnly?: boolean;
}>`
  width: 100%;
  height: calc(100% - 22px);
  box-sizing: border-box;
  font-weight: normal;
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  ${({ theme }) =>
    css`
      padding: ${theme.sizes.xs.value} ${theme.sizes.xs.value};
    `}
  resize: none;
  border: 0;
  &:hover,
  &:focus {
    outline: none;
  }

  ::placeholder {
    opacity: 0.8;
    color: ${({ theme }) => theme.colors.colours.information.indirect.value};
    ${({ disabled, theme }) =>
      disabled &&
      css`
        color: ${theme.colors.colours.system['disable-light-theme'].value};
      `}
  }
  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: ${theme.colors.colours.default.transparent.value};
      color: ${theme.colors.colours.system['disable-light-theme'].value};
    `}
  ${({ readOnly, theme }) =>
    readOnly &&
    css`
      background-color: ${theme.colors.colours.support[20].value};
      color: ${theme.colors.colours.support[80].value};
    `}
`;

export const StyledTextAreaWrapper = styled.div<{
  resize?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isError?: boolean;
}>`
  min-height: 96px;
  height: 100px;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.colors.colours.system.fail.value : theme.colors.colours.support[40].value};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  &:hover,
  &:focus {
    outline: none;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.colours.information.indirect.value};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  }
  ${({ resize }) =>
    resize
      ? css`
          resize: vertical;
        `
      : css`
          resize: none;
        `}
  ${({ theme, disabled }) =>
    disabled &&
    css`
      border-color: ${theme.colors.colours.system['disable-light-theme'].value};
      color: ${theme.colors.colours.system['disable-light-theme'].value};
      &:hover,
      &:focus {
        outline: none;
        border-color: inherit;
      }
    `}
  ${({ theme, readOnly }) =>
    readOnly &&
    css`
      border-color: ${theme.colors.colours.support[40].value};
      color: ${theme.colors.colours.support[80].value};
      background-color: ${theme.colors.colours.support[20].value};
      &:hover,
      &:focus {
        outline: none;
        border-color: ${theme.colors.colours.support[40].value};
      }
    `}
`;
export const StyledTextAreaCharacterCounterContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
`;
export const StyledTextAreaCharacterCounter = styled.div<{
  disabled?: boolean;
}>`
  margin-top: 5px;
  position: relative;
  width: fit-content;
  margin-left: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.colours.support[60].value};
  color: ${({ theme }) => theme.colors.colours.default.white.value};
  font-family: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-family'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  padding: 0 ${({ theme }) => theme.sizes['3xs'].value};
  border-radius: 7px;
  display: flex;
  align-items: center;
  height: 14px;
  font-weight: bold;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
`;
