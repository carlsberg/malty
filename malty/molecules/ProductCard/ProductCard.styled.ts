import { CardOrientation } from '@carlsberggroup/malty.atoms.card';
import { Icon } from '@carlsberggroup/malty.atoms.icon';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Text, TextColor } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledMargin = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledSelect = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
  button {
    > div {
    }
  }
`;
export const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.s.value};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes['2xs'].value};
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
  @media screen and (max-width: ${({ theme }) => theme.layout.xsmall['device-max-width']?.value}) {
    display: block;
  }
`;
export const StyledPriceContainer = styled.div``;
export const StyledLoyalty = styled.div``;
export const StyledStock = styled.div`
  display: flex;
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
export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledDiscountContainer = styled.div`
  position: absolute;
  display: flex;
  top: ${({ theme }) => theme.sizes['2xs'].value};
  left: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledFavorite = styled(Icon)`
  position: absolute;
  right: ${({ theme }) => theme.sizes['2xs'].value};
  bottom: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledDiscountPill = styled.div`
  margin-right: ${({ theme }) => theme.sizes['4xs'].value};
  display: flex;
`;
export const StyledCartPill = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.sizes['2xs'].value};
  top: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledPromoPill = styled.div``;
