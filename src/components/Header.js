import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'styled-components/macro';

const Header = () => {
    return (
        <Navbar
            bg="orange-light"
            expand="lg"
            css={`
                font-weight: 900;

                .navbar-brand span {
                    color: var(--dark);
                }

                .navbar-nav {
                    margin-right: 9rem;
                    text-transform: uppercase;
                }

                .nav-link {
                    transition: color 0.1s;
                }
            `}
        >
            <Container>
                <Navbar.Brand href="#">
                    SD
                    <span>hacks</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
