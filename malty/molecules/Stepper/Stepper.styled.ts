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
      ? parseInt(theme.variables.icon.size.small.value) - 4
      : theme.variables.icon.size.small.value}px;
  height: ${({ theme, active, currentStep }) =>
    currentStep || !active
      ? parseInt(theme.variables.icon.size.small.value) - 4
      : theme.variables.icon.size.small.value}px;
  border: ${({ theme, active, currentStep }) =>
    currentStep
      ? 'solid 2px ' + theme.color.default.value
      : active
      ? '0'
      : 'solid 2px ' + theme.color.support.support60.value};
  border-radius: 50%;
  align-items: center;
`;

export const StyledStepperNumber = styled.span<{
  active: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.information.micro['font-size'].value}px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.information['font-family'].value};
  color: ${({ theme, active }) => (active ? theme.color.default.value : theme.color.support.support60.value)};
`;

export const StyledStepperLine = styled.span<{
  active: boolean;
}>`
  display: inline-block;
  flex: 1;
  height: 4px;
  background-color: ${({ theme, active }) =>
    active ? theme.color.default.value : theme.color.support.support60.value};
`;
