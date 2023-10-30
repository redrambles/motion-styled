import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLink, NavItem } from "./NavbarStyles";
import { navbarData } from "../../data/NavbarData";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon src='./images/logo.svg' alt='logo' />
            Dynamics
          </NavLogo>
          <MobileIcon onClick={() => setShow(!show)}>{show ? <FaTimes /> : <CgMenuRight />}</MobileIcon>
          <NavMenu show={show}>
            {navbarData.map((el, index) => (
              <NavItem key={index}>
                <NavLink to={`/#${el.to}`} onClick={closeMenu}>
                  {el.text}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
