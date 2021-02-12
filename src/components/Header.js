import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'styled-components/macro';
import $ from 'jquery';

import Logo from '../assets/logo-header.png';
import pinnacle from '../assets/partners/pinnacle.png';

const Header = ({ navItems }) => {
    const navLinks = useMemo(() => navItems, [navItems]);

    useEffect(() => {
        navLinks.forEach((name) => {
            $(`a[href='#${name}']`).on('click', () => {
                $('html,body').animate(
                    {
                        scrollTop: $(`.${name}`).offset().top,
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
                font-size: 18px;

                .navbar-brand img {
                    margin-left: 45px;

                    @media (max-width: 576px) {
                        height: 25px;
                    }
                }

                .navbar-nav {
                    margin-right: 14rem;
                    text-transform: uppercase;
                }

                .nav-link {
                    transition: color 0.1s;
                }
            `}
        >
            <Container>
                <Navbar.Brand href="/" className="mx-auto mr-md-auto">
                    <img src={Logo} alt="logo" height="40" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        {navLinks.map((name, i) => (
                            <Nav.Link href={`#${name}`} key={i}>
                                {name}
                            </Nav.Link>
                        ))}
                        <Nav.Link href={`fellowship`}>
                            {`fellowship`}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <a
                id="mlh-trust-badge"
                href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg"
                    alt="Major League Hacking 2021 Hackathon Season"
                    width="100%"
                />
            </a>

            <a
                id="pinnacle-trust-badge"
                href="https://pinnacle.us.org/"
                target="_blank"
                rel="noreferrer noopener"
            >
                <img
                    src={pinnacle}
                    alt="Pinnacle 2021"
                    width="100%"
                />
            </a>
        </Navbar>
    );
};

Header.propTypes = {
    navItems: PropTypes.array,
};

export default Header;
