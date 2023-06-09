import { TextColor } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledStock = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.sizes['4xs'].value};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledStockStatusColor = styled.div<{
  infoColor?: TextColor;
}>`
  width: ${({ theme }) => theme.sizes['3xs'].value};
  height: ${({ theme }) => theme.sizes['3xs'].value};
  background-color: ${({ theme, infoColor }) => infoColor && theme.colors['text-colours'][infoColor].value};
  border-radius: 50%;
`;

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['2xs'].value};
`;

export const StyledInputWrapper = styled.div`
  flex: 1;
`;

export const StyledButtonWrapper = styled.div<{ hasIcon?: boolean; hasActionQuantityInput?: boolean }>`
  ${({ hasIcon }) => !hasIcon && 'flex: 1;'}
  ${({ hasActionQuantityInput }) => !hasActionQuantityInput && 'width: 100%;'}
`;
