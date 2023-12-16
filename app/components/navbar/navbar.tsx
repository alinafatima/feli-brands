import React, { useEffect, useState } from "react";
import {
  BrandHeading,
  BrandNameWrapper,
  NavBar,
  NavBarListItems,
  NavContent,
  NavbarList,
} from "./styled";
import Menu from "@/app/icons/menu";
import { CloseIcon } from "@/app/icons/close";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 577
  );
  const isMobile = windowWidth < 576;
  const [isNavCollapsed, setIsNavCollapsed] = useState(isMobile);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <NavBar>
      <NavContent>
        <BrandNameWrapper>
          <BrandHeading>Feli</BrandHeading>
          <BrandHeading>Brands</BrandHeading>
        </BrandNameWrapper>
        {isNavCollapsed && isMobile ? (
          <button
            style={{
              background: "none",
              border: "none",
              padding: 0,
              margin: 0,
              marginRight: "1vw",
            }}
            onClick={handleNavCollapse}
          >
            <Menu />
          </button>
        ) : null}
      </NavContent>
      <NavbarList>
        {!isMobile || (!isNavCollapsed && isMobile) ? (
          <NavBarListItems>
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
          </NavBarListItems>
        ) : null}
      </NavbarList>
      {!isNavCollapsed && isMobile ? (
        <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            margin: 0,
            marginRight: "1vw",
          }}
          onClick={handleNavCollapse}
        >
          <CloseIcon />
        </button>
      ) : null}
    </NavBar>
  );
};

export default Navbar;
