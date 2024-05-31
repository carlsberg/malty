import { space, SpaceProps } from '@carlsberggbs/malty.utils.space';
import styled from 'styled-components';

export const StyledWrapper = styled.div<SpaceProps>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes['4xs'].value};

  ${space}
`;

export const StyledMRO = styled.div`
  width: ${({ theme }) => theme.sizes.s.value};
  height: ${({ theme }) => theme.sizes.s.value};
  background-color: ${({ theme }) => theme.colors.colours.support['80'].value};
  display: inline-flex;
  align-content: center;
  justify-content: center;
`;
