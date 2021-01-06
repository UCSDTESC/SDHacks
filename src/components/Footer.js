import React from 'react';
import styled from 'styled-components';
import 'styled-components/macro';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

import BuildingBottom from '../assets/svg/building-footer-b.svg';
import BuildingRight from '../assets/svg/building-footer-r.svg';

const Footer = () => {
    return (
        <StyledFooter className="contact">
            <Container>
                <p>
                    have any questions?
                    <br />
                    talk to us at{' '}
                    <a href="mailto:sdhacks@tesc.ucsd.edu">
                        sdhacks@tesc.ucsd.edu
                    </a>
                </p>
                <div className="logo-wrapper">
                    <h1 className="">TESC</h1>
                    <h2 className="text-center text-md-left">
                        triton engineering
                        <br />
                        student council
                    </h2>
                </div>

                <div
                    css={`
                        width: fit-content;
                        margin: 0 auto;

                        a + a {
                            margin-left: 20px;
                        }

                        a {
                            color: white;
                            transition: color 0.1s;
                        }

                        a:hover {
                            color: var(--green);
                        }
                    `}
                >
                    <a
                        href="https://www.facebook.com/SDHacks"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.instagram.com/sdhacks/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://twitter.com/SDHacks"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.linkedin.com/company/sd-hacks/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <FaLinkedin />
                    </a>
                </div>

                <img src={BuildingBottom} alt="" width="25%" />
                <img
                    src={BuildingRight}
                    alt=""
                    css={`
                        position: absolute;
                        right: 0;
                        top: -150px;
                        width: 20%;
                    `}
                />
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 3rem;
    background: var(--dark);
    color: white;
    position: relative;

    p {
        text-align: center;
        font-size: clamp(1rem, 3vw, 1.5rem);

        a {
            font-weight: bold;
            color: var(--green);
        }

        a:hover {
            color: var(--green);
        }
    }

    .logo-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        color: var(--green);

        h1 {
            font-weight: 900;
            font-size: clamp(3rem, 13vw, 100px);
        }

        h2 {
            font-weight: 800;
            font-size: clamp(1rem, 5vw, 40px);
            line-height: 40px;
            position: relative;
            top: 15px;
            left: 15px;
        }
    }
`;

export default Footer;
