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

export const StyledPageNumber = styled.button<{ active?: boolean }>`
  border-style: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  background-color: ${({ theme, active }) => (active ? theme.color.support.support40.value : 'transparent')};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition-property: color, background-color;
  transition-duration: 250ms, 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms, 0ms;

  :hover {
    background-color: ${({ theme }) => theme.color.overlay.opacity10.default.value};
  }
  :focus-visible {
    outline: 0;
    background-color: ${({ theme }) => theme.color.overlay.opacity10.default.value};
  }
`;

export const StyledDots = styled(StyledPageNumber)`
  cursor: default;
  background-color: transparent;
  :hover {
    background-color: transparent;
  }
`;
