import styled from 'styled-components';

export const StyledProductsBar = styled.div`
  width: ${({ theme }) => theme.variables.productsBar.width.value}px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.default.value};
  border-width: ${({ theme }) => theme.variables.productsBar.border.value}px;
  border-color: ${({ theme }) => theme.variables.productsBar.borderColor.value};
  border-style: solid;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.variables.productsBar.paddingVertical.value}px
    ${({ theme }) => theme.variables.productsBar.paddingSide.value}px;
`;
