import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0px;
  ${({ theme }) =>
    theme &&
    css`
      border: ${theme.borders['border-1px--solid']['border-width'].value}
        ${theme.borders['border-1px--solid']['border-style'].value} ${theme.colors.colours.support[20].value};
    `}
`;
export const StyledThead = styled.thead``;

export const StyledHead = styled.th`
  background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  color: ${({ theme }) => theme.colors.colours.support[80].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-size'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-weight'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-family'].value};
  height: ${({ theme }) => theme.sizes.xl.value};
  text-align: left;
  padding-left: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledTbody = styled.tbody``;
export const StyledRow = styled.tr<{
  size?: string;
  isClickable: boolean;
}>`
  transition: background-color 0.2s cubic-bezier(0, 0, 0.58, 0.9);
  height: ${({ size }) => size};
  ${({ theme, isClickable }) =>
    theme &&
    isClickable &&
    css`
      cursor: pointer;
      &:hover {
        background-color: ${theme.colors.colours.overlay['digital-black'][5].value};
      }
      &:active {
        background-color: ${theme.colors.colours.overlay['digital-black'][10].value};
      }
    `}
`;
export const StyledTd = styled.td`
  padding-left: ${({ theme }) => theme.sizes['2xs'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  height: ${({ theme }) => theme.sizes.xl.value};
`;
export const StyledPaginationWrapper = styled.div`
  margin-top: ${({ theme }) => theme.sizes.s.value};
  justify-content: end;
  display: flex;
`;
