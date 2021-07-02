import styled, { css } from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily.text};
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.colors.fail};
  font-size: 12px;
  font-weight: bold;
  padding-top: 6px;
`;

export const StyledCheckboxLabelText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  margin-left: 8px;
  font-size: 14px;
  line-height: 18px;
`;

export const StyledCheckboxHiddenInput = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

export const StyledCheckboxDisplayInput = styled.div<{ checked: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  height: 16px;
  width: 16px;
  transition: background-color 0.25s ease-in-out;
  border-radius: 3px;
  position: relative;

  &:before {
    content: '';
    height: 10px;
    width: 6px;
    position: absolute;
    top: calc(50% - 1px);
    left: 50%;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-bottom-right-radius: 2px;
    border-color: ${({ theme }) => theme.colors.white};
    transition: 0.25s ease-in-out;
    transition-property: opacity, border-color;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: 0;
  }
  ${({ checked }) =>
    checked &&
    css`
      background-color: ${({ theme }) => theme.colors.primary};
      &:before {
        opacity: 1;
      }
    `}
`;

export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    ${StyledCheckboxHiddenInput}:not(:checked) + ${StyledCheckboxDisplayInput} {
      &:before {
        border-color: ${({ theme }) => theme.colors.black};
        opacity: 0.2;
      }
    }
  }
`;
