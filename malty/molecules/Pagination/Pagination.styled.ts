import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

export const StyledChevron = styled.button<{ disabled: boolean }>`
  border-style: none;
  height: ${({ theme }) => theme.variables.pagination.height.value};
  width: ${({ theme }) => theme.variables.pagination.width.value};
  padding: 0;
  margin: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'Pointer')};
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  }
`;

export const StyledDots = styled.div`
  height: ${({ theme }) => theme.variables.pagination.height.value}px;
  width: ${({ theme }) => theme.variables.pagination.width.value}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
