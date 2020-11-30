import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

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
                <Row>
                    <Col md={6} sm={12}>
                        <h1 className="text-center text-md-right">TESC</h1>
                    </Col>
                    <Col>
                        <h2 className="text-center text-md-left">
                            trtiton engineering
                            <br />
                            student council
                        </h2>
                    </Col>
                </Row>
                <div className="logo-wrapper"></div>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 3rem;
    background: var(--dark);
    color: white;

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

    .row {
        color: var(--green);

        h1 {
            font-weight: 900;
            font-size: clamp(3rem, 13vw, 100px);
        }

        h2 {
            font-weight: 800;
            font-size: clamp(1rem, 5vw, 40px);
        }
    }
`;

export default Footer;
