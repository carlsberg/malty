import { Text } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledPrice = styled(Text)<{
  discount: boolean;
}>`
  text-decoration: ${({ discount }) => discount && 'line-through'};
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledPriceContainer = styled.div``;
