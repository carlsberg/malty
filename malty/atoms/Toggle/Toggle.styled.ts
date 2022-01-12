import styled, { css } from 'styled-components';

export const StyledError = styled.label`
  font-family: inherit;
  color: ${({ theme }) => theme.color.system.failStrong.value};
  font-size: ${({ theme }) => theme.typography.information.tiny['font-size'].value}px;
  font-weight: bold;
  line-height: ${({ theme }) => theme.typography.information.tiny['line-height'].value}px;
  letter-spacing: 0;
`;

export const StyledLabelWrapper = styled.label`
  align-items: center;
  display: inline-block;
  display: flex;
  height: ${({ theme }) => theme.variables.toggle.height.value}px;
  position: relative;
  width: auto;
`;
export const StyledToggleSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.variables.toggle.width.value}px;
  height: ${({ theme }) => theme.variables.toggle.height.value}px;
`;
export const StyledLabel = styled.label<{
  disabled?: boolean;
}>`
  font-weight: normal;
  font-size: ${({ theme }) => theme.typography.text['medium-small']['font-size'].value}px;
  line-height: ${({ theme }) => theme.typography.text['medium-small']['line-height'].value}px;
  color: ${({ theme }) => theme.color.default.value};
  margin-left: 8px;
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.color.system.disabledDefault.value};
    `}
`;
export const StyledInput = styled.input<{
  disabled?: boolean;
}>`
  display: none;
  &:checked + .switch::before {
    transform: translateX(13px);
    background-color: ${({ theme }) => theme.color.white.value};
    border: none;
    top: 1px;
  }
  &:checked + .switch {
    background-color: ${({ theme }) => theme.color.default.value};
    &:hover {
      background-color: ${({ theme }) => theme.color.support.support80.value};
    }
  }
  ${({ disabled }) =>
    disabled &&
    css`
      &:checked + .switch {
        background-color: ${({ theme }) => theme.color.system.disabledDefault.value};
        pointer-events: none;
        border: 2px solid ${({ theme }) => theme.color.system.disabledDefault.value};
      }
    `}
`;

export const StyledSwitch = styled.span<{
  disabled?: boolean;
}>`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.white.value};
  border-radius: ${({ theme }) => theme.variables.toggle.switch.borderRadius.value}px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
  border: 2px solid ${({ theme }) => theme.color.default.value};
  &:hover {
    border: 2px solid ${({ theme }) => theme.color.support.support80.value};
    &:before {
      border: 2px solid ${({ theme }) => theme.color.support.support80.value};
    }
  }
  &:before {
    position: absolute;
    content: '';
    left: ${({ theme }) => theme.variables.toggle.switch.before.left.value}px;
    top: ${({ theme }) => theme.variables.toggle.switch.before.top.value}px;
    width: ${({ theme }) => theme.variables.toggle.switch.before.width.value}px;
    height: ${({ theme }) => theme.variables.toggle.switch.before.height.value}px;
    background-color: ${({ theme }) => theme.color.white.value};
    border: 2px solid ${({ theme }) => theme.color.default.value};
    border-radius: ${({ theme }) => theme.variables.toggle.switch.before.borderRadius.value}%;
    transition: transform 0.3s ease;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      &:before {
        border: 2px solid ${({ theme }) => theme.color.system.disabledDefault.value};
        pointer-events: none;
      }
      pointer-events: none;
      border: 2px solid ${({ theme }) => theme.color.system.disabledDefault.value};
    `}
`;
