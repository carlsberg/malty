import { CardOrientation } from '@carlsberggroup/malty.atoms.card';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Text } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledBody = styled.div``;
export const StyledMargin = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.s.value};
`;
export const StyledImage = styled(Image)<{
  orientation: CardOrientation;
}>`
  width: ${({ orientation }) => orientation === CardOrientation.Portrait && '100%'};
  height: ${({ orientation }) => orientation === CardOrientation.Landscape && '100%'};
`;
export const StyledPrice = styled(Text)<{
  discountPrice: boolean;
}>`
  text-decoration: ${({ discountPrice }) => discountPrice && 'line-through'};
  margin-right: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledPriceContainer = styled.div<{}>``;
export const StyledLoyalty = styled.div<{}>``;
export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
