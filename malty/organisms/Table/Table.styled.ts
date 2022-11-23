import { Icon } from '@carlsberggroup/malty.atoms.icon';
import styled, { css } from 'styled-components';

export const StyledTable = styled.table`
  table-layout: auto;
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

export const StyledHead = styled.th<{
  isSortable: boolean;
}>`
  cursor: ${({ isSortable }) => (isSortable ? 'pointer' : 'default')};
  background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  color: ${({ theme }) => theme.colors.colours.support[80].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-size'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-weight'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-family'].value};
  height: ${({ theme }) => theme.sizes.xl.value};
  text-align: left;
  padding-left: ${({ theme }) => theme.sizes['2xs'].value};
  padding-bottom: 0;
  padding-top: 0;
  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-left: ${({ theme }) => theme.sizes['2xs'].value};
    }
  }
  &.draggable-header {
    width: ${({ theme }) => theme.sizes.m.value};
    box-sizing: border-box;
  }
  &.checkbox-header {
    width: ${({ theme }) => theme.sizes.xl.value};
    box-sizing: border-box;
  }
  .sort-icon {
    &:hover {
      fill: ${({ theme }) => theme.colors.colours.support[100].value};
    }
  }
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
export const StyledTd = styled.td<{
  width?: number;
}>`
  box-sizing: border-box;
  width: ${({ width }) => `${width}px` || 'auto'};
  padding-bottom: 0;
  padding-top: 0;
  padding-left: ${({ theme }) => theme.sizes['2xs'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  height: ${({ theme }) => theme.sizes.xl.value};
`;
export const StyledFooterWrapper = styled.div`
  margin-top: ${({ theme }) => theme.sizes.s.value};
  justify-content: space-between;
  display: flex;
`;
export const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledSortIcon = styled(Icon)`
  &:hover {
    fill: ${({ theme }) => theme.colors.colours.support[80].value};
  }
`;
export const StyledDraggableCell = styled(StyledTd)`
  padding-left: ${({ theme }) => theme.sizes['4xs'].value}; ;
`;
export const StyledNoRecordsWrapper = styled.div`
  padding: ${({ theme }) => theme.sizes['3xl'].value} 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
