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

export const StyledSideNav = styled.div`
  max-width: ${({ theme }) => theme.variables.sideNav.maxWidth.value}px;
  width: calc(100% - ${({ theme }) => theme.variables.productsBar.width.value}px);
  height: 100%;
  background-color: ${({ theme }) => theme.color.default.value};
  padding-top: ${({ theme }) => theme.variables.sideNav.list.paddingTop.value}px;
  padding-bottom: ${({ theme }) => theme.variables.sideNav.list.paddingBottom.value}px;
  padding-left: ${({ theme }) => theme.variables.sideNav.list.paddingLeft.value}px;
  padding-right: 0;
  box-sizing: border-box;
`;

export const StyledListWrapper = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
  margin-top: ${({ theme }) => theme.variables.sideNav.list.marginTop.value}px;
  box-sizing: border-box;
`;
