import { Text } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledPrice = styled(Text)<{
  discount: boolean;
}>`
  text-decoration: ${({ discount }) => discount && 'line-through'};
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
  /* @media screen and (max-width: ${({ theme }) => theme.layout.xsmall['device-max-width']?.value}) {
    display: block;
  } */
`;
export const StyledPriceContainer = styled.div``;
