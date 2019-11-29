import React, { useState } from 'react';
import { NavItem, Navbar, NavLink, Nav, NavbarToggler, Collapse } from 'reactstrap';

const style = {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    
    
}
const style2 = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    margin: "5px",
    padding: "0px"
}

const NavBar = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return ( 
        <Navbar color='faded'
        dark id = 'navbar'
        style = { style2 }> 
        <NavbarToggler onClick={toggleNavbar} className="mr-auto" />
        <Collapse isOpen={!collapsed} navbar> Menu
        <Nav >
        <NavItem >
        <NavLink href = '#home' style = { style }>
        Home 
        </NavLink>  
        </NavItem> 
        <NavItem >
        <NavLink href = '#about' style = { style }>
        About 
        </NavLink> 
        </NavItem>
        <NavItem >
        <NavLink href = '#skills' style = { style }>
        Tech Stack 
        </NavLink>  
        </NavItem>  
        <NavItem >
        <NavLink href = '#projects' style = { style }>
        Projects 
        </NavLink>  
        </NavItem> 
        <NavItem >
        <NavLink href = '#social-contact' style = { style }>
        Contact 
        </NavLink>  
        </NavItem>  
        </Nav>  
        </Collapse>
        </Navbar>

    )
};

export default NavBar;