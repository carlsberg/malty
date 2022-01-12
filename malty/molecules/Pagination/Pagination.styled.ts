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
  height: 40px;
  width: 40px;
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
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
