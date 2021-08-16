import styled, { css } from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: ${({ theme }) => theme.typography.text.small['font-size'].value}px;
  font-weight: bold;
  padding-top: ${({ theme }) => theme.variables.checkbox.error.padding.value}px;
`;

export const StyledCheckboxLabelText = styled.span`
  color: ${({ theme }) => theme.color.default.value};
  margin-left: ${({ theme }) => theme.variables.checkbox.label.leftPadding.value}px;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  line-height: ${({ theme }) => theme.typography.text['medium-small']['line-height'].value}px;
`;

export const StyledCheckboxHiddenInput = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

export const StyledCheckboxDisplayInput = styled.div<{ checked?: boolean }>`
  border: ${({ theme }) => theme.variables.checkbox.border.value}px solid ${({ theme }) => theme.color.default.value};
  height: ${({ theme }) => theme.variables.checkbox.size.value}px;
  width: ${({ theme }) => theme.variables.checkbox.size.value}px;
  transition: background-color 0.25s ease-in-out;
  border-radius: ${({ theme }) => theme.variables.checkbox.borderRadius.value}px;
  position: relative;

  &:before {
    content: '';
    opacity: 0;
  }
  ${({ checked }) =>
    checked &&
    checked === true &&
    css`
      background-color: ${({ theme }) => theme.color.default.value};
      &:before {
        height: 10px;
        width: 6px;
        position: absolute;
        top: calc(50% - 1px);
        left: 50%;
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-bottom-right-radius: 2px;
        border-color: ${({ theme }) => theme.color.white.value};
        transition: 0.25s ease-in-out;
        transition-property: opacity, border-color;
        transform: translate(-50%, -50%) rotate(45deg);
        opacity: 1;
      }
    `}
  ${({ checked }) =>
    !checked &&
    checked === undefined &&
    css`
      &:before {
        width: 10px;
        position: absolute;
        top: 50%;
        left: 50%;
        border-bottom: 2px solid;
        border-color: ${({ theme }) => theme.color.default.value};
        transition: 0.25s ease-in-out;
        transition-property: opacity, border-color;
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    `}
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  &:hover {
    ${StyledCheckboxHiddenInput}:not(:checked) + ${StyledCheckboxDisplayInput} {
      &:before {
        height: 10px;
        width: 6px;
        position: absolute;
        top: calc(50% - 1px);
        left: 50%;
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-bottom-right-radius: 2px;
        transition: 0.25s ease-in-out;
        transition-property: opacity, border-color;
        transform: translate(-50%, -50%) rotate(45deg);
        border-color: ${({ theme }) => theme.color.default.value};
        opacity: 0.2;
      }
    }
  }
`;
