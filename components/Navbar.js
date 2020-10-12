import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const NavbarComponent = () => {

    return (
        <Navbar style={{fontSize: '1.2rem'}}>
            <Navbar.Brand href="/">niyaziekinci.dev</Navbar.Brand>
            <Navbar.Toggle />
            <Nav className="justify-content-end ml-auto">
                <Nav.Link href="/">home</Nav.Link>
                <Nav.Link href="/posts">blog</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarComponent;