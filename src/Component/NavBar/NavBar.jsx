// Modules
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'reactstrap';

const NavBar = ({ location }) => (
  <div className={location.pathname === '/' ? "NavBarHomePage" : "NavBar"}>
    <Navbar light expand="md">
      <Link to="/"> <img alt="Prello" src="./assets/logo1.png"/></Link>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink  to="/home">Boards</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/members/me" > My Account</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/organizations">Team Management</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login" >Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup" >Signup</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);
export default NavBar;