import { Text } from '@carlsberggbs/malty.atoms.text';
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes['2xs'].value};
  margin-top: ${({ theme }) => theme.sizes.s.value};

  ${({ theme }) => css`
    @media only screen and (min-width: ${theme.layout.xsmall['device-max-width']?.value}) {
      flex-direction: row;
      gap: initial;
    }
  `}
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const StyledInfo = styled(Text)`
  margin-right: ${({ theme }) => theme.sizes['3xs'].value};
`;
