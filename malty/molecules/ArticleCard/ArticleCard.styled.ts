import { CardOrientation } from '@carlsberggbs/malty.atoms.card';
import { Image } from '@carlsberggbs/malty.atoms.image';
import { space, SpaceProps } from '@carlsberggbs/malty.utils.space';
import styled from 'styled-components';

export const StyledArticle = styled.article<SpaceProps>`
  ${space}
`;

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
