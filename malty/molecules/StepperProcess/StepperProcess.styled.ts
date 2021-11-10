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
  border: solid 3px #f1f4f8;
  border-radius: 50%;
  border-color: ${({ active }) => (active ? '#212833' : '#f1f4f8')};
`;

export const StyledStepperProcessLine = styled.span<{
  active: boolean;
}>`
  display: inline-block;
  width: 50px;
  height: 3px;
  background-color: #f1f4f8;
  border-color: ${({ active }) => (active ? '#212833' : '#f1f4f8')};
`;
