import styled from 'styled-components';

export const StyledMRO = styled.div`
  width: ${({ theme }) => theme.sizes.s.value};
  height: ${({ theme }) => theme.sizes.s.value};
  background-color: ${({ theme }) => theme.colors.colours.support['80'].value};
  display: inline-flex;
  align-content: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.sizes['4xs'].value};
`;
