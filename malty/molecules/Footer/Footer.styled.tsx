import styled, { css } from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.theme.themePrimary.value};
  padding: ${({ theme }) => theme.sizes['2xl'].value} 0;
  text-align: center;
`;
export const StyledAdress = styled.div`
  width: 30%;
  margin: ${({ theme }) => theme.sizes.s.value} auto 0 auto;
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.layout.small['device-max-width']?.value}) {
      width: 50%;
    }
  `}
`;
export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: ${({ theme }) => theme.sizes['2xs'].value};
  ${({ theme }) => css`
    @media screen and (max-width: ${theme.layout.small['device-max-width']?.value}) {
      flex-direction: column;
    }
  `}
`;
export const StyledCluster = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin-top: ${({ theme }) => theme.sizes.m.value};
  }
  a {
    text-align: left;
    text-transform: capitalize;
    margin-top: ${({ theme }) => theme.sizes.m.value};
    display: block;
  }
`;
export const StyledSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin: ${({ theme }) => theme.sizes.l.value} 0;
`;
