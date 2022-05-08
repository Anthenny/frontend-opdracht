import React from "react";
import { StyledNavbar } from "../styles/Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <img src="./assets/developers_logo.png" alt="logo" />
      <ul>
        <li>Home</li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
