// Modules
import React from 'react';


import '../../style/App.css'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

const NavBar = ({
    navBarBrend, 
    currentPage,
    navLink, 
    navMyAccount,
    navLogOut
}) => (
    <div className="NavBar">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">{navBarBrend}</NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="#">{currentPage}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">{navLink}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">{navMyAccount}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">{navLogOut}</NavLink>
            </NavItem>
        </Nav>
        </Navbar>
    </div>
);

export default NavBar;