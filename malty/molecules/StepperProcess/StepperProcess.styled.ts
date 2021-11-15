import styled from 'styled-components';

export const StyledStepperProcessContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStepperProcessCircle = styled.span<{
  active: boolean;
  currentStep: boolean;
}>`
  display: flex;
  justify-content: center;
  width: ${({ theme, active, currentStep }) =>
    currentStep || !active ? theme.variables.icon.size.small.value - 4 : theme.variables.icon.size.small.value}px;
  height: ${({ theme, active, currentStep }) =>
    currentStep || !active ? theme.variables.icon.size.small.value - 4 : theme.variables.icon.size.small.value}px;
  border: ${({ theme, active, currentStep }) =>
    currentStep
      ? 'solid 2px ' + theme.color.default.value
      : active
      ? '0'
      : 'solid 2px ' + theme.color.support.support60.value};
  border-radius: 50%;
  align-items: center;
`;

export const StyledStepperProcessNumber = styled.span<{
  active: boolean;
}>`
  font-size: ${({ theme }) => theme.typography.information.micro['font-size'].value}px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  font-family: ${({ theme }) => theme.typography.information['font-family'].value};
  color: ${({ theme, active }) => (active ? theme.color.default.value : theme.color.support.support60.value)};
`;

export const StyledStepperProcessLine = styled.span<{
  active: boolean;
}>`
  display: inline-block;
  flex: 1;
  height: 4px;
  background-color: ${({ theme, active }) =>
    active ? theme.color.default.value : theme.color.support.support60.value};
`;
