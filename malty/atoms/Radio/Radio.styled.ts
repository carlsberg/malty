import styled, { css } from 'styled-components';

export const StyledRadio = styled.input`
  display: inline-block;
  height: ${({ theme }) => theme.variables.radio.size.value}px;
  width: ${({ theme }) => theme.variables.radio.size.value}px;
  margin: 0;

  position: relative;

  cursor: pointer;

  &:before {
    content: '';
    transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
    position: absolute;
    top: 50%;
    transform: translateY(-50%) scale(0, 0);
    left: 5px;
    z-index: 1;

    width: ${({ theme }) => theme.variables.radio.inputSelected.value}px;
    height: ${({ theme }) => theme.variables.radio.inputSelected.value}px;

    background: ${({ theme }) => theme.color.black.value};

    border-radius: ${({ theme }) => theme.variables.radio.borderRadius.value}%;
  }

  &:checked {
    &:before {
      transform: translateY(-50%) scale(1, 1);
    }
  }

  &:after {
    content: '';

    position: absolute;

    width: ${({ theme }) => theme.variables.radio.size.value}px;
    height: ${({ theme }) => theme.variables.radio.size.value}px;
    box-sizing: border-box;
    background: ${({ theme }) => theme.color.white.value};

    border: 2px solid ${({ theme }) => theme.color.default.value};
    border-radius: ${({ theme }) => theme.variables.radio.borderRadius.value}%;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      &:before {
        background: ${({ theme }) => theme.color.button.primaryDisable.value};
      }
      &:after {
        background: ${({ theme }) => theme.color.white.value};
        border: 2px solid ${({ theme }) => theme.color.button.primaryDisable.value};
      }
    `}
`;

export const StyledLabel = styled.label<{
  disabled?: boolean;
}>`
  color: ${({ theme }) => theme.color.default.value};
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  line-height: ${({ theme }) => theme.typography.text['medium-small']['line-height'].value}px;
  padding-left: ${({ theme }) => theme.variables.radio.paddingLeft.value}px;
  font-weight: 400;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.information.disable.value};
      pointer-events: none;
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
export const StyledRadioContainer = styled.div`
  display: flex;
  align-items: center;
`;
