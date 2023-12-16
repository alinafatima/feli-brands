import styled from 'styled-components';

export const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  flex: 1;
  width: 100vw;
  z-index: 10;
  display: flex;
  background: white;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavContent = styled.div`
  display:  flex;
  width: 100vw;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  margin-right: 1vw;

  
`;

export const BrandNameWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  font-family: Poppins,sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0.5vw;
  font-size: 1.2rem;
  margin-left: 2.5vw;
`

export const BrandHeading = styled.h1`
  text-align: left;
  align-self: flex-start;
`

export const NavBarListItems = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`