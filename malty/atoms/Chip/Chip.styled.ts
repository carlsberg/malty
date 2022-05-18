import styled from 'styled-components';

export const StyledChip = styled.div<{
  size: string;
  selected: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${({ size }) => size};
  width: fit-content;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.colours.support[80].value : theme.colors.colours.support[20].value};
  button {
    svg {
      fill: ${({ selected, theme }) =>
        selected ? theme.colors.colours.default.white.value : theme.colors.colours.support[80].value};
    }
  }
`;
export const StyledTextContainer = styled.div`
  padding: 0 ${({ theme }) => theme.sizes['2xs'].value}; ;
`;
export const StyledIcon = styled.div`
  padding-left: ${({ theme }) => theme.sizes['2xs'].value}; ;
`;
