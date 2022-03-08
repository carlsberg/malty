import styled, { css } from 'styled-components';

export const StyledTextareaContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const StyledLabel = styled.label<{
  disabled?: boolean;
}>`
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text.small_default['line-height'].value};
  padding-bottom: ${({ theme }) => theme.sizes['2xs'].value};
  font-weight: bold;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.colors.colours.system['disable-light-theme'].value};
    `}
`;
export const StyledError = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-size: ${({ theme }) => theme.typography.desktop.text.tiny_default['font-size'].value};
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.desktop.text.tiny_default['line-height'].value};
  letter-spacing: 0;
  margin-top: ${({ theme }) => theme.sizes['4xs'].value};
`;
export const StyledHint = styled.label<{
  disabled?: boolean;
}>`
  font-family: inherit;
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

export const StyledtextArea = styled.textarea<{
  disabled?: boolean;
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
  }
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: transparent;
    `}
`;

export const StyledTextAreaWrapper = styled.div<{
  resize?: boolean;
  disabled?: boolean;
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
  ${({ resize }) =>
    resize
      ? css`
          resize: vertical;
        `
      : css`
          resize: none;
        `}
  ${({ theme, disabled }) =>
    disabled
      ? css`
          background-color: ${theme.colors.colours.system['disable-light-theme'].value};
        `
      : css`
          &:hover,
          &:focus {
            outline: none;
          }
          &:hover {
            border-color: ${theme.colors.colours.information.indirect.value};
          }
          &:focus {
            border-color: ${theme.colors.colours.default['digital-black'].value};
            color: ${theme.colors.colours.default['digital-black'].value};
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
