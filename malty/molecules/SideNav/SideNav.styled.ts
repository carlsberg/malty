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
`;

export const StyledSideNav = styled.div`
  max-width: 220px;
  width: calc(100% - 80px);
  height: 100%;
  background-color: #212833;
  padding: 23px 0 23px 33px;
  box-sizing: border-box;
`;

export const StyledNavList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 77px;
  box-sizing: border-box;
`;

export const StyledNavItem = styled.li`
  width: 100%;
  padding: 20px 36px;
  text-transform: capitalize;
  position: relative;
  box-sizing: border-box;
  background-color: #212833;
  cursor: pointer;
  & a {
    text-decoration: none;
  }
  & svg {
    position: absolute;
    left: 9px;
  }
  & p {
    margin: 0;
  }
  &:hover {
    background-color: #314550;
    transition: background-color 0.2s ease-in-out;
  }
`;
