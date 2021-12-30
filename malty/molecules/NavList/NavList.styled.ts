import styled from 'styled-components';

export const StyledNavList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 77px;
  box-sizing: border-box;
`;

export const StyledNavItem = styled.li<{
  selected: boolean;
}>`
  width: 100%;
  height: 56px;
  padding: 20px 36px;
  text-transform: capitalize;
  position: relative;
  box-sizing: border-box;
  background-color: ${({ selected }) => `${selected ? '#668494' : '#212833'}`};
  cursor: ${({ selected }) => `${selected ? 'default' : 'pointer'}`};
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
      left: 36px;
      top: 20px;
    }
  }
  & svg {
    position: absolute;
    left: 9px;
  }
  & p {
    margin: 0;
  }
  &:hover {
    background-color: ${({ selected }) => `${selected ? '#668494' : '#314550'}`};
    transition: background-color 0.2s ease-in-out;
  }
`;

export const StyledSubNavItem = styled(StyledNavItem)`
  padding-left: 48px;
`;

export const StyledRightArrow = styled.span`
  & svg {
    left: initial;
    right: 16px;
    top: 22px;
  }
`;
