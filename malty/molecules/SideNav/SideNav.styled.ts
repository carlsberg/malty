import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
 100% 
    { 
      translateX(0);
    }
`;

export const StyledWrapper = styled.div<{
  zIndex: number;
}>`
  width: auto;
  height: 100%;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  box-sizing: border-box;
  overflow-y: hidden;
  max-width: 300px;
  transition: 0.3s ease-in-out;
  position: absolute;
  z-index: ${({ zIndex }) => zIndex};
  @media screen and (min-width: ${({ theme }) => theme.layout.small['device-max-width']?.value}) {
    position: relative;
  }
`;

export const StyledSideNav = styled.div<{
  productName?: string;
}>`
  width: 220px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  padding-top: calc(
    ${({ theme, productName }) => (productName ? `${theme.sizes.l.value}` : `${theme.sizes.m.value} + 15vh`)}
  );
  padding-bottom: ${({ theme }) => theme.sizes.m.value};
  padding-left: ${({ theme }) => theme.sizes.l.value};
  padding-right: 0;
  box-sizing: border-box;
  & h6 {
    margin-bottom: 15vh;
  }
  position: relative;
  animation: ${slideAnimation} 0.5s forwards;
  left: 0;
  transition: 0.3s ease-in-out;
`;

export const StyledListWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 0;
  box-sizing: border-box;
`;
