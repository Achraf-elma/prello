// Modules
import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem} from 'reactstrap';
import Board from './../../Component/Board/Board';

class NavBar extends React.Component{
    constructor(props) {
        super(props);
      }

render() {
const {navBarBrend, 
    currentPage,
    current = this.props.location.pathname,
    navLink, 
    navMyAccount,
    navLogOut} = {...this.props};
return (
    <div className={current == '/' ? "NavBarHomePage" : "NavBar"}>
        <Navbar light expand="md">
        <NavbarBrand> <Link to="/"> <img src="./assets/logo1.png"/></Link></NavbarBrand>
        <Nav className="ml-auto" navbar>
            <NavItem>
                 <NavLink  to="/board">My Board</NavLink>
            </NavItem>
            <NavItem>
                    <NavLink  to="/board">Boards</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="#" > My Account</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="#" >Log out</NavLink>
            </NavItem>
        </Nav>

           
        
        </Navbar>
    </div>

    );
}
}
export default NavBar;