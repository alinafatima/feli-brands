import React from 'react';
import { NavBar, NavbarList } from './styled';

const Navbar = () => {
  return (
    <NavBar>
      <NavbarList>
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#products">Products</a>
        </li>
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact</a>
        </li>
      </NavbarList>
   </NavBar>
  );
};

export default Navbar;
