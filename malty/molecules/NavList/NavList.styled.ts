import styled from 'styled-components';

export const StyledNavList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  & a {
    text-decoration: none;
  }
`;

export const StyledNavItem = styled.li<{
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.sizes[`3xl`].value};
  padding: ${({ theme }) => `0 ${theme.sizes.l.value}`};
  text-transform: capitalize;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ selected, theme }) =>
    `${selected ? theme.colors.colours.support[80].value : theme.colors.colours.default['digital-black'].value}}`};
  cursor: ${({ selected }) => `${selected ? 'default' : 'pointer'}`};
  user-select: none;

  & svg {
    position: absolute;
    left: ${({ theme }) => theme.sizes[`2xs`].value};
    top: 50%;
    transform: translateY(-50%);
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
    top: 50%;
    transform: translateY(-50%);
  }
`;
