import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, Button, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const navigate = useNavigate()
    const [collapsed, setCollapsed] = useState(true)

    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }
    
    return (
        <div>
            <Navbar color="light" light>
                <NavbarBrand href='/'>MtgConnect</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className=''/>
                    <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem className="pl-2">
                        <NavLink href="/allposts" className="text-blue-600 hover:text-purple-700">All Posts</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/create" className="text-blue-600 hover:text-purple-700"></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/mine" className="text-blue-600 hover:text-purple-700"></NavLink>
                    </NavItem>
                    {
                        (localStorage.getItem("mtg_token") !== null) ?
                            <NavItem>
                                <Button color='primary'
                                    onClick={() => {
                                        localStorage.removeItem("mtg_token");
                                        navigate('/login');
                                    }}
                                >
                                    Logout
                                </Button>
                            </NavItem> :
                            <>
                                <NavItem>
                                    <NavLink href="/login" className="text-blue-600 hover:text-purple-700">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/register" className="text-blue-600 hover:text-purple-700">Register</NavLink>
                                </NavItem>
                            </>
                    }
                    
                </Nav>
                    </Collapse>
            </Navbar>
        </div>
        );
};
