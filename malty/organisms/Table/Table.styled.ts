import { space } from '@carlsberggroup/malty.utils.space';
import styled, { css } from 'styled-components';
import { StyledTableWrapperProps, TableHeaderAlignment } from './Table.types';

export const StyledWrapper = styled.div<StyledTableWrapperProps>`
  position: relative;
  min-height: ${({ $isLoading }) => ($isLoading ? '222px' : 'auto')};
  ${space}
`;

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
  alignPosition?: TableHeaderAlignment;
  allowSelection?: boolean;
  width?: number;
}>`
  cursor: ${({ isSortable }) => (isSortable ? 'pointer' : 'default')};
  background-color: ${({ theme }) => theme.colors.colours.support[20].value};
  color: ${({ theme }) => theme.colors.colours.support[80].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-size'].value};
  font-weight: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-weight'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_bold']['font-family'].value};
  height: ${({ theme }) => theme.sizes.xl.value};
  text-align: ${({ alignPosition }) => alignPosition || 'left'};
  padding: ${({ theme, allowSelection }) => (allowSelection ? '0' : `0 ${theme.sizes['2xs'].value}`)};
  width: ${({ width }) => width || 'auto'};

  > * {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${({ alignPosition }) => {
      if (alignPosition === TableHeaderAlignment.Right) {
        return 'right';
      }
      if (alignPosition === TableHeaderAlignment.Center) {
        return 'center';
      }

      return 'left';
    }};

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

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.colours.support[80].value};
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
  alignPosition?: TableHeaderAlignment;
}>`
  text-align: ${({ alignPosition }) => alignPosition || 'left'};
  box-sizing: border-box;
  width: ${({ width }) => `${width}px` || 'auto'};

  padding: 0 ${({ theme }) => theme.sizes['2xs'].value};
  font-size: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-size'].value};
  font-family: ${({ theme }) => theme.typography.desktop.text['medium-small_default']['font-family'].value};
  color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  height: ${({ theme }) => theme.sizes.xl.value};
`;

export const StyledDraggableCell = styled(StyledTd)`
  padding-left: ${({ theme }) => theme.sizes['4xs'].value};
`;

export const StyledNoRecordsWrapper = styled.div`
  padding: ${({ theme }) => theme.sizes['5xl'].value} 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
