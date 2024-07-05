import { Text } from '@carlsberg/malty.atoms.text';
import { space, SpaceProps } from '@carlsberg/malty.utils.space';
import styled from 'styled-components';

export const StyledPriceContainer = styled.div<SpaceProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${space}
`;

export const StyledPrice = styled(Text)<{
  discount: boolean;
}>`
  text-decoration: ${({ discount }) => discount && 'line-through'};
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
`;
