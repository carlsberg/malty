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
      margin-right: ${({ theme }) => theme.sizes['2xs'].value};
    }
    li:last-child {
      & button {
        padding: 0 ${({ theme }) => theme.sizes['2xs'].value};
      }
      margin-left: ${({ theme }) => theme.sizes['2xs'].value};
    }
    .default-pagination {
      button {
        margin: 0;
      }
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
export const StyledInputPagination = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledInput = styled.input`
  width: ${({ theme }) => theme.sizes['3xl'].value};
  height: ${({ theme }) => theme.sizes.xl.value};

  box-sizing: border-box;
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-weight'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  transition: 0.25s ease-in-out;
  transition-property: border-color, color;
  border: 1px solid ${({ theme }) => theme.colors.colours.support[40].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  flex-grow: unset;
  text-align: center;
  vertical-align: top;
  padding: 0;
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  &:hover,
  &:focus,
  &:focus-visible {
    outline: none;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.colours.information.indirect.value};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
    color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  }
`;
