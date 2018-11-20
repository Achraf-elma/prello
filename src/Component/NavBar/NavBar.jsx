// Modules
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from 'reactstrap';
import client from '../../request/client';

const NavBar = ({ location }) => (
  <div className={location.pathname === '/' ? "NavBarHomePage" : "NavBar"}>
    <Navbar light expand="md">
      <Link to="/"> <img alt="Prello" src="./assets/logo1.png"/></Link>
      <Nav className="ml-auto" navbar>
        { client.me &&
          <NavItem>
            <NavLink  to="/home">My Boards</NavLink>
          </NavItem>
        } {client.me &&
        <NavItem>
          <NavLink to="/members/me" > My Account</NavLink>
        </NavItem>
        } {client.me &&
        <NavItem>
          <NavLink to="/organizations">Team Management</NavLink>
        </NavItem>
        }
        {!client.me ? 
          <div>
        <NavItem>
          <NavLink to="/login" >Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/signup" >Signup</NavLink>
        </NavItem>
        </div>
        :
        <div>
          <NavItem>
            <NavLink to="/logout" >Log out</NavLink>
          </NavItem>
        </div>
        }  
      </Nav>
    </Navbar>
  </div>
);
export default NavBar;