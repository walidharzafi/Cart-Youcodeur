import React, { useState, useContext } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link, NavLink} from 'react-router-dom'
import { UserContext } from '../../Context/ContextUser'

const Header = () => {
    const { authe : {isAuth}} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <>
        <Navbar className="bgc" light expand="md" >
            <NavbarBrand  className="container"  href="/">Cart Youcoders </NavbarBrand>
            <NavbarToggler onClick={toggle}  className="m-auto"/>
            <Collapse isOpen={isOpen} navbar >
                <Nav className="text-center" navbar>
                        <NavItem>
                            <Link className="nav-link" to="/">Home</Link>
                        </NavItem>
                    {!isAuth ? (
                        <>
                         <NavItem>
                            <NavLink className="nav-link" to="/register">Register</NavLink>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/login">Login</Link>
                        </NavItem>
                        </>
                    ) : (
                        <NavItem>
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </NavItem>
                    )}
                </Nav>
            </Collapse>
        </Navbar>
      </>
    );
}

export default Header
