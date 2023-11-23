import { space, SpaceProps } from '@carlsberggroup/malty.utils.space';
import styled from 'styled-components';

export const StyledRatingContainer = styled.div<SpaceProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: ${({ theme }) => theme.sizes.m.value};

  ${space}
`;

export const StyledStarContainer = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.sizes.s.value};
  flex-direction: row-reverse;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.sizes.s.value};
`;

export const StyledInput = styled.input`
  display: none;
  position: absolute;
  margin-left: -9999;
`;

export const StyledLabel = styled.label<{
  hideCursor: boolean;
}>`
  cursor: ${({ hideCursor }) => (hideCursor ? 'default' : 'pointer')};
`;

export const StyledIconStarContainer = styled.span`
  font-style: normal;

  > svg {
    path {
      &:hover {
        opacity: 0.95;
      }
      &:active {
        opacity: 0.9;
      }
    }
  }
`;

export const StyledTotalReviewContainer = styled.span`
  margin-top: ${({ theme }) => theme.sizes['5xs'].value};
`;
