import styled from 'styled-components';

export const StyledContainer = styled.div<{ isWhite?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    svg {
      fill: ${({ theme, isWhite }) =>
        isWhite ? theme.colors.colours.default.white.value : theme.colors.colours.default['digital-black'].value};
    }
    :disabled {
      svg {
        fill: ${({ theme, isWhite }) =>
          isWhite
            ? theme.colors.colours.overlay.white[25].value
            : theme.colors.colours.system['disable-light-theme'].value};
      }
      background-color: transparent;
      :hover {
        background-color: transparent;
      }
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li:first-child {
      & button {
        padding: 0 ${({ theme }) => theme.sizes['2xs'].value};
      }
      margin-right: 8px;
    }
    li:last-child {
      & button {
        padding: 0 ${({ theme }) => theme.sizes['2xs'].value};
      }
      margin-left: ${({ theme }) => theme.sizes['2xs'].value};
    }
  }
`;

export const StyledDots = styled.div<{ isWhite?: boolean }>`
  height: ${({ theme }) => theme.sizes.xl.value};
  width: ${({ theme }) => theme.sizes.xl.value};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  color: ${({ theme, isWhite }) =>
    isWhite ? theme.colors['text-colours'].white.value : theme.colors['text-colours']['digital-black'].value};
`;
