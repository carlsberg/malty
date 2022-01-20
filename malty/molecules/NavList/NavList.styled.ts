import styled from 'styled-components';

export const StyledNavList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

export const StyledNavItem = styled.li<{
  selected: boolean;
}>`
  width: 100%;
  height: ${({ theme }) => theme.variables.navList.listItem.height.value}px;
  padding: ${({ theme }) => theme.variables.navList.listItem.paddingVertical.value}px
    ${({ theme }) => theme.variables.navList.listItem.paddingSide.value}px;
  text-transform: capitalize;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ selected, theme }) =>
    `${selected ? theme.color.support.support80.value : theme.color.default.value}`};
  cursor: ${({ selected }) => `${selected ? 'default' : 'pointer'}`};
  user-select: none;
  & a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    & span {
      display: inline-block;
      position: absolute;
      left: ${({ theme }) => theme.variables.navList.listItem.labelLeft.value}px;
      top: ${({ theme }) => theme.variables.navList.listItem.labelTop.value}px;
    }
  }
  & svg {
    position: absolute;
    left: ${({ theme }) => theme.variables.navList.listItem.iconLeft.value}px;
  }
  & p {
    margin: 0;
  }
  &:hover {
    background-color: ${({ selected, theme }) => `${selected ? theme.color.support.support80.value : '#314550'}`};
    transition: background-color 0.2s ease-in-out;
  }
`;

export const StyledSubNavItem = styled(StyledNavItem)`
  padding-left: ${({ theme }) => theme.variables.navList.subItem.paddingLeft.value}px;
`;

export const StyledRightArrow = styled.span`
  & svg {
    left: initial;
    right: ${({ theme }) => theme.variables.navList.listItem.arrowRight.value}px;
    top: ${({ theme }) => theme.variables.navList.listItem.arrowTop.value}px;
  }
`;
