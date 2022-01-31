import styled from 'styled-components';

export const StyledProductsBar = styled.div`
  width: ${({ theme }) => theme.variables.productsBar.width.value}px;
  height: 100%;
  background-color: ${({ theme }) => theme.color.default.value};
  border-width: ${({ theme }) => theme.variables.productsBar.border.value}px;
  border-color: ${({ theme }) => theme.color.productsBar.border.value};
  border-style: solid;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.variables.productsBar.paddingVertical.value}px
    ${({ theme }) => theme.variables.productsBar.paddingSide.value}px;
  overflow-y: hidden;
`;
export const StyledSystemWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: calc(
    ${({ theme }) => theme.variables.sideNav.maxWidth.value}px +
      ${({ theme }) => theme.variables.productsBar.width.value}px
  );
`;

export const StyledSystemMenu = styled.ul`
  width: 100%;
  position: relative;
  margin-bottom: 84px;
  list-style: none;
  padding: 0;
`;

export const StyledSystemOption = styled.li`
  width: 80px;
  height: 56px;
  cursor: pointer;
  position: relative;
  z-index: 100;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

export const StyledProfileBtn = styled(StyledSystemOption)`
  position: absolute;
  transform: translateY(-86px);
`;

export const StyledOptionIcon = styled.span`
  width: 56px;
  height: 56px;
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledAvatar = styled.span`
  width: 40px;
  height: 40px;
  display: inline-block;
  position: absolute;
  margin-top: 16px;
  margin-bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledProfileMenu = styled.div<{
  open: boolean;
}>`
  width: 100%;
  background-color: ${({ open }) => (open ? 'rgba(49, 69, 80, 1)' : 'transparent')};
  position: absolute;
  transform: ${({ open }) => (open ? 'translateY(-100%)' : 'translateY(-84px)')};
  overflow-y: hidden;
  transition: all 0.2s ease-out;
  z-index: 200;
`;
export const StyledProfileHeader = styled.div`
  padding-left: 88px;
  top: 0;
  position: absolute;
`;

export const StyledRoleLabel = styled.p`
  font-size: 12px;
  margin-top: -8px;
  color: rgba(157, 179, 189, 1);
  font-family: 'Montserrat';
`;

export const StyledProfileActions = styled.div<{
  open: boolean;
}>`
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  & ul {
    padding-left: 0;
    margin-left: 0;
  }
`;

export const StyledProfileItem = styled.li`
  list-style: none;
  width: 100%;
  height: 56px;
  display: flex;
  padding-left: 62px;
  position: relative;
  align-items: center;
  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 35px;
  }
  & span p {
    margin: 0;
  }
  & a {
    text-decoration: none;
  }
`;

export const StyledOverlay = styled.div<{
  open: boolean;
}>`
  width: 100%;
  height: 100%;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: ${({ open }) => (open ? 'block' : 'none')};
  max-width: calc(
    ${({ theme }) => theme.variables.sideNav.maxWidth.value}px +
      ${({ theme }) => theme.variables.productsBar.width.value}px
  );
  background-color: rgba(33, 40, 51, 0.75);
`;
