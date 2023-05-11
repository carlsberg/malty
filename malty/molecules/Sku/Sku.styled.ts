import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const StyledMRO = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${({ theme }) => theme.colors.colours.support['80'].value};
  display: flex;
  align-content: center;
  justify-content: center;
`;
