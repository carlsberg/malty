import styled, { css } from 'styled-components';

export const StyledTextareaContainer = styled.div`
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

export const StyledtextArea = styled.textarea`
  width: 100%;
  height: calc(100% - 22px);
  box-sizing: border-box;
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  color: ${({ theme }) => theme.color.button.primaryDefault.value};
  padding: ${({ theme }) => theme.variables.textarea.padding.value}px;
  resize: none;
  border: 0;
  &:hover,
  &:focus {
    outline: none;
  }

  ::placeholder {
    opacity: 0.8;
    color: ${({ theme }) => theme.color.information.indirect.value};
  }
`;

export const StyledTextAreaWrapper = styled.div<{
  resize?: boolean;
  disabled?: boolean;
  isError?: boolean;
  fullWidth?: boolean;
}>`
  min-width: 290px;
  min-height: 96px;
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  border: 1px solid
    ${({ theme, isError }) =>
      isError ? theme.color.system.failStrong.value : theme.color.form.calendarAvailable.value};
  overflow: hidden;
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          max-width: 100%;
        `
      : css`
          max-width: 380px;
        `};
  ${({ resize }) =>
    resize
      ? css`
          resize: vertical;
        `
      : css`
          resize: none;
        `};
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
export const StyledTextAreaCharacterCounterContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
`;
export const StyledTextAreaCharacterCounter = styled.div`
  margin-top: 5px;
  position: relative;
  width: fit-content;
  margin-left: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.color.support.support60.value};
  color: ${({ theme }) => theme.color.white.value};
  font-size: ${({ theme }) => theme.typography.information.tiny['font-size'].value}px;
  padding: ${({ theme }) => theme.variables.textarea.counter.padding.value}px;
  border-radius: ${({ theme }) => theme.variables.textarea.counter.borderRadius.value}px;
  line-height: ${({ theme }) => theme.variables.textarea.counter.lineHeight.value}px;
  font-weight: bold;
`;
