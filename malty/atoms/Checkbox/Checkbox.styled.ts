import styled, { css } from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  font-family: inherit;
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled.label`
  color: ${({ theme }) => theme.colors.colours.system.fail.value};
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  font-weight: bold;
  padding-top: ${({ theme }) => theme.sizes['3xs'].value};
`;

export const StyledCheckboxLabelText = styled.span`
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  margin-left: ${({ theme }) => theme.sizes['2xs'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  line-height: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['line-height'].value};
`;

export const StyledCheckboxHiddenInput = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`;

export const StyledCheckboxDisplayInput = styled.div<{ checked?: boolean }>`
  ${({ theme }) =>
    css`
      border: ${theme.borders['border-1px--solid']['border-width'].value}
        ${theme.borders['border-1px--solid']['border-style'].value}
        ${theme.colors.colours.default['digital-black'].value};
    `}
  height: ${({ theme }) => theme.sizes.s.value};
  width: ${({ theme }) => theme.sizes.s.value};
  transition: background-color 0.25s ease-in-out;
  border-radius: 3px;
  position: relative;

  &:before {
    content: '';
    opacity: 0;
  }
  ${({ checked }) =>
    checked &&
    checked === true &&
    css`
      background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
      &:before {
        height: 10px;
        width: 6px;
        position: absolute;
        top: calc(50% - 1px);
        left: 50%;
        border-right: 2px solid;
        border-bottom: 2px solid;
        border-bottom-right-radius: 2px;
        border-color: ${({ theme }) => theme.colors.colours.default.white.value};
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
        border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
        transition: 0.25s ease-in-out;
        transition-property: opacity, border-color;
        transform: translate(-50%, -50%);
        opacity: 1;
      }
    `}
`;

export const StyledCheckboxLabel = styled.label<{
  required?: boolean;
}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: ' *';
        color: ${({ theme }) => theme.colors.colours.system.fail.value};
      }
    `}
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
        border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
        opacity: 0.2;
      }
    }
  }
`;
