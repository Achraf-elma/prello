// Modules
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';

const NavBar = ({
    navBarBrend, 
    currentPage,
    navLink, 
    navMyAccount,
    navLogOut
}) => (
    <div className="NavBar">
        <Navbar light expand="md">
        <NavbarBrand href="/"> <img src="./assets/logo1.png"/> </NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                 <NavLink  to="/board">My Board</NavLink>
            </NavItem>
            <NavItem>
                    <NavLink  to="/board">Boards</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="#" >{navMyAccount}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="#" >{navLogOut}</NavLink>
            </NavItem>
        </Nav>
        </Navbar>
    </div>
);

export default NavBar;