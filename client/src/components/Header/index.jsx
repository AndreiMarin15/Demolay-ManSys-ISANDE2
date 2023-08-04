import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger, Login } from "./NavElement";

import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/appform1" activeStyle>
            Apply Now
          </MenuLink>
          <MenuLink to="https://demolay.ph/what-is-demolay/" activeStyle>
            About DeMolay
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Chapter Locations
          </MenuLink>
          <MenuLink to="/eventsHome" activeStyle>
            Events
          </MenuLink>
          <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>
          <MenuLink
            activeStyle
            onClick={() => {
              axios.get("http://localhost:5000/logout");
              window.location.href = `/`;
            }}
          >
            Logout
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
};
export default Navbar;
