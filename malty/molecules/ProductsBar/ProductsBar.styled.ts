import styled from 'styled-components';

export const StyledProductsBar = styled.div`
  width: ${({ theme }) => theme.sizes[`5xl`].value};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.colours.default['digital-black'].value};
  border-width: ${({ theme }) => theme.borders['border-1px--solid']['border-width'].value};
  border-color: rgb(49, 69, 80);
  border-style: solid;
  box-sizing: border-box;
  padding: ${({ theme }) => `${theme.sizes.m.value} ${theme.sizes.l.value}`};
  overflow: hidden;
`;
export const StyledSystemWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: calc(220px + 80px);
`;

export const StyledSystemMenu = styled.ul`
  width: 100%;
  position: relative;
  margin-bottom: ${({ theme }) => theme.sizes[`5xl`].value};
  list-style: none;
  padding: 0;
`;

export const StyledSystemOption = styled.li`
  width: ${({ theme }) => theme.sizes[`5xl`].value};
  height: ${({ theme }) => theme.sizes[`3xl`].value};
  list-style: none;
  cursor: pointer;
  position: relative;
  z-index: 100;
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.sizes[`2xs`].value};
  }
`;

export const StyledProfileBtn = styled(StyledSystemOption)`
  position: absolute;
  transform: translateY(-86px);
`;

export const StyledOptionIcon = styled.span`
  width: ${({ theme }) => theme.sizes[`3xl`].value};
  height: ${({ theme }) => theme.sizes[`3xl`].value};
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
  width: ${({ theme }) => theme.sizes.xl.value};
  height: ${({ theme }) => theme.sizes.xl.value};
  display: inline-block;
  position: absolute;
  margin-top: ${({ theme }) => theme.sizes.s.value};
  margin-bottom: ${({ theme }) => theme.sizes.m.value};
  left: 50%;
  transform: translateX(-50%);
`;

export const StyledProfileMenu = styled.div<{
  open: boolean;
}>`
  width: 100%;
  background-color: ${({ open }) => (open ? 'rgb(49,69,80)' : 'transparent')};
  position: absolute;
  transform: ${({ open }) => (open ? 'translateY(-100%)' : 'translateY(-84px)')};
  overflow: hidden;
  transition: all 0.2s ease-out;
  z-index: 200;
`;
export const StyledProfileHeader = styled.div`
  padding-left: ${({ theme }) => theme.sizes[`5xl`].value};
  top: 0;
  position: absolute;
  padding-top: ${({ theme }) => theme.sizes.m.value};
`;

export const StyledRoleLabel = styled.p`
  font-size: ${({ theme }) => theme.typography.desktop.text.small_default['font-size'].value};
  color: ${({ theme }) => theme.colors.colours.support[60].value};
  font-family: ${({ theme }) => theme.typography.desktop.text.small_default['font-family'].value};
  margin-top: ${({ theme }) => theme.sizes['4xs'].value};
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
  height: ${({ theme }) => theme.sizes[`3xl`].value};
  display: flex;
  padding-left: ${({ theme }) => theme.sizes[`4xl`].value};
  position: relative;
  align-items: center;
  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ theme }) => theme.sizes.l.value};
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
  max-width: calc(220px + 80px);
  background-color: ${({ theme }) => theme.colors.colours.overlay['digital-black'][75].value};
`;
