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
  max-width: ${({ theme }) => theme.variables.sideNav.maxWidth.value}px;
  width: calc(100% - ${({ theme }) => theme.variables.productsBar.width.value}px);
  height: 100%;
  background-color: ${({ theme }) => theme.color.default.value};
  padding-top: calc(
    ${({ theme, productName }) =>
      productName
        ? `${theme.variables.sideNav.list.paddingTop.value}px + 22px + 15vh`
        : `${theme.variables.sideNav.list.paddingTop.value}px + 15vh`}
  );
  padding-bottom: ${({ theme }) => theme.variables.sideNav.list.paddingBottom.value}px;
  padding-left: ${({ theme }) => theme.variables.sideNav.list.paddingLeft.value}px;
  padding-right: 0;
  box-sizing: border-box;
  & h1 {
    position: absolute;
    top: ${({ theme }) => theme.variables.sideNav.list.paddingTop.value}px;
  }
`;

export const StyledListWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: 0;
  box-sizing: border-box;
`;
