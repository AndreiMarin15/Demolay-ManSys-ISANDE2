import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger, Login} from './NavElement'

const Navbar = () => {
  return (
    <>
    /* TO DO: INSERT LOGO (navlogo.png) EITHER INSIDE NAV BAR OR ABOVE
       ADD 'LOGIN' BUTTON TO LEAD TO LOGIN SCREEN -- DIFFERS FROM HOME SCREEN */

      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About DeMolay
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Chapter Locations
          </MenuLink>
          <MenuLink to="/eventsAttendance" activeStyle>
            Events
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar