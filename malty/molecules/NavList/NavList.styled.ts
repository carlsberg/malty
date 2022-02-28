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
  height: ${({ theme }) => theme.sizes[`3xl`].value};
  padding: ${({ theme }) => `21px ${theme.sizes.l.value}`};
  text-transform: capitalize;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ selected, theme }) =>
    `${selected ? theme.colors.colours.support[80].value : theme.colors.colours.default['digital-black'].value}}`};
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
  }
  & svg {
    position: absolute;
    left: ${({ theme }) => theme.sizes[`2xs`].value};
  }
  & p {
    margin: 0;
  }
  &:hover {
    background-color: ${({ selected, theme }) =>
      `${selected ? theme.colors.colours.support[80].value : theme.colors.colours.support[100].value}`};
    transition: background-color 0.2s ease-in-out;
  }
  &.firstInCategory {
    border-top: 1px solid ${({ theme }) => theme.colors.colours.support[80].value};
  }
  &.lastInCategory {
    border-bottom: 1px solid ${({ theme }) => theme.colors.colours.support[80].value};
  }
`;

export const StyledSubNavItem = styled(StyledNavItem)`
  padding-left: ${({ theme }) => theme.sizes.s.value};
`;

export const StyledRightArrow = styled.span`
  & svg {
    left: initial;
    right: ${({ theme }) => theme.sizes.s.value};
    top: 22px;
  }
`;
