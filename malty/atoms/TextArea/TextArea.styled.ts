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

export const StyledtextArea = styled.textarea<{
  resize?: boolean;
  disabled?: boolean;
}>`
  width: 100%;
  display: block;
  box-sizing: border-box;
  font-weight: normal;
  min-height: 96px;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  color: ${({ theme }) => theme.color.button.primaryDefault.value};
  padding: ${({ theme }) => theme.variables.textarea.padding.value}px;

  border-radius: 0;
  border: 1px solid ${({ theme }) => theme.color.form.calendarAvailable.value};

  ::placeholder {
    opacity: 0.8;
    color: ${({ theme }) => theme.color.information.indirect.value};
  }
  ${({ resize }) =>
    resize
      ? css`
          resize: both;
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

export const StyledTextAreaWrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  &::before {
    content: 'fffff';
    position: absolute;
    bottom: 0;
    height: 25px;
    width: 100%;
    background-color: red;
  }
`;
export const StyledTextAreaCharacterCounterContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 auto;
`;
export const StyledTextAreaCharacterCounter = styled.div`
  position: absolute;
  left: 8px;
  bottom: 8px;
  background-color: ${({ theme }) => theme.color.support.support60.value};
  color: white;
  font-size: ${({ theme }) => theme.typography.information.tiny['font-size'].value}px;
  padding: 0 6px;
  border-radius: 100px;
  line-height: 14px;
  font-weight: bold;
  &::before {
    content: '';
    margin-top: 10px;
    height: 20px;
  }
`;
