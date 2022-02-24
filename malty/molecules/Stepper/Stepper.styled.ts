/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const StyledStepperContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStepperCircle = styled.span<{
  active: boolean;
  currentStep: boolean;
}>`
  display: flex;
  justify-content: center;
  width: ${({ theme, active, currentStep }) =>
    currentStep || !active
      ? parseInt(theme.sizes.s.value.replace('px', ''), 10) - 4
      : theme.sizes.s.value.replace('px', '')}px;
  height: ${({ theme, active, currentStep }) =>
    currentStep || !active
      ? parseInt(theme.sizes.s.value.replace('px', ''), 10) - 4
      : theme.sizes.s.value.replace('px', '')}px;
  border: ${({ theme, active, currentStep }) =>
    currentStep
      ? `solid 2px ${theme.colors.colours.default['digital-black'].value}`
      : active
      ? '0'
      : `solid 2px ${theme.colors.colours.support[60].value}`};
  border-radius: 50%;
  align-items: center;
`;

export const StyledStepperNumber = styled.span<{
  active: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.desktop.text.micro_default['font-size'].value};
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.desktop.text.micro_default['font-family'].value};
  color: ${({ theme, active }) =>
    active ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[60].value};
`;

export const StyledStepperLine = styled.span<{
  active: boolean;
}>`
  display: inline-block;
  flex: 1;
  height: 4px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.colours.default['digital-black'].value : theme.colors.colours.support[60].value};
`;
