import styled from 'styled-components';

export const StyledStepperProcessContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const StyledStepperProcessStep = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledStepperProcessCircle = styled.span<{
  active: boolean;
}>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: solid 3px ${({ theme }) => theme.color.support.support20.value};
  border-radius: 50%;
  border-color: ${({ theme, active }) => (active ? theme.color.default.value : theme.color.support.support20.value)};
`;

export const StyledStepperProcessLine = styled.span<{
  active: boolean;
}>`
  display: inline-block;
  width: 50px;
  height: 3px;
  background-color: ${({ theme }) => theme.color.support.support20.value};
  border-color: ${({ theme, active }) => (active ? theme.color.default.value : theme.color.support.support20.value)};
`;
