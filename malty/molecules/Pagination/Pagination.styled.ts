import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledChevron = styled.div<{ disabled: boolean }>`
  > svg {
    cursor: ${({ disabled }) => (disabled ? 'unset' : 'Pointer')};
    opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
    margin: 0 16px;
  }
`;

export const StyledPageNumber = styled.div<{ active?: boolean }>`
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  background-color: ${({ theme, active }) => (active ? theme.color.support.support40.value : 'transparent')};

  -webkit-transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition-property: color, background-color;
  transition-duration: 250ms, 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0ms, 0ms;

  :hover {
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
