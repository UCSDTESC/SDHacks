import React, { useEffect, useMemo } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'styled-components/macro';
import $ from 'jquery';

const Header = () => {
    const navLinks = useMemo(
        () => [
            { name: 'about', href: '#about', className: 'about' },
            { name: 'contact', href: '#contact', className: 'contact' },
        ],
        []
    );

    useEffect(() => {
        navLinks.forEach(({ href, className }) => {
            $(`a[href='${href}']`).on('click', () => {
                $('html,body').animate(
                    {
                        scrollTop: $(`.${className}`).offset().top,
                    },
                    'slow'
                );
            });
        });

        return () => {
            navLinks.forEach(({ href }) => $(`a[href='${href}']`).off());
        };
    }, [navLinks]);

    return (
        <Navbar
            bg="orange-light"
            expand="lg"
            css={`
                font-weight: 900;

                .navbar-brand {
                    transition: color 0.1s;

                    span {
                        color: var(--dark);
                    }
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
                        {navLinks.map(({ name, href }, i) => (
                            <Nav.Link href={href} key={i}>
                                {name}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
