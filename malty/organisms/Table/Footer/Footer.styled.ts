import { Text } from '@carlsberggroup/malty.atoms.text';
import styled, { css } from 'styled-components';

export const StyledWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.sizes.s.value};

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.layout.xsmall['device-max-width']?.value}) {
      flex-direction: column;
      align-items: center;
      gap: ${theme.sizes['2xs'].value};
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
