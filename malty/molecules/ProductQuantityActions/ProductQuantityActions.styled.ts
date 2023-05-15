import { TextColor } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledStock = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-right: ${({ theme }) => theme.sizes['4xs'].value};
  margin-top: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledStockInformation = styled.div<{
  infoColor?: TextColor;
}>`
  margin-right: ${({ theme }) => theme.sizes['4xs'].value};
  width: ${({ theme }) => theme.sizes['3xs'].value};
  height: ${({ theme }) => theme.sizes['3xs'].value};
  background-color: ${({ theme, infoColor }) => infoColor && theme.colors['text-colours'][infoColor].value};
  border-radius: 50%;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.s.value};
  gap: ${({ theme }) => theme.sizes['2xs'].value};
`;
