import { CardOrientation } from '@carlsberggroup/malty.atoms.card';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Text, TextColor } from '@carlsberggroup/malty.atoms.text';
import styled from 'styled-components';

export const StyledMargin = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
`;
export const StyledPillWrapper = styled.div`
  position: absolute;
  display: flex;
  top: ${({ theme }) => theme.sizes['2xs'].value};
  left: ${({ theme }) => theme.sizes['2xs'].value};
  right: ${({ theme }) => theme.sizes['2xs'].value};
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['4xs'].value} 0;
`;
export const StyledSelect = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes['2xs'].value};
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
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes['4xs'].value} 0;
`;
export const StyledFavoriteWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.colours.default.white.value};
  border-radius: 50%;
  position: absolute;
  right: ${({ theme }) => theme.sizes['2xs'].value};
  bottom: ${({ theme }) => theme.sizes['2xs'].value};
  width: ${({ theme }) => theme.sizes.m.value};
  height: ${({ theme }) => theme.sizes.m.value};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDiscountPill = styled.div`
  margin-right: ${({ theme }) => theme.sizes['4xs'].value};
  display: flex;
`;

export const StyledAlert = styled.div`
  position: relative;
`;
