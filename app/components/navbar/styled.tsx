import styled from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  flex: 1;
  width: 100vw;
  z-index: 10;
  display: flex;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const NavbarList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: row;
  list-style: none;
  justify-content: flex-end;
  margin-right: 1vw;
`;