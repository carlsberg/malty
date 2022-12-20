import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  box-sizing: border-box;
  overflow-y: hidden;
`;

export const StyledSideNav = styled.div<{
  productName?: string;
}>`
  max-width: 220px;
  width: calc(100% - 80px);
  height: 100%;
  background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  padding-top: calc(
    ${({ theme, productName }) =>
      productName ? `${theme.sizes.m.value} + 22px + 15vh` : `${theme.sizes.m.value} + 15vh`}
  );
  padding-bottom: ${({ theme }) => theme.sizes.m.value};
  padding-left: ${({ theme }) => theme.sizes.l.value};
  padding-right: 0;
  box-sizing: border-box;
  & h1 {
    position: absolute;
    top: ${({ theme }) => theme.sizes.m.value};
  }
`;

export const StyledListWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 0;
  box-sizing: border-box;
`;
