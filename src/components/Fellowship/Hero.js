import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

import HeroImg from '../../assets/svg/building-hero-bl.svg';

const Hero = () => {
    return (
        <HeroContainer>
            <Container>
                <Row xs={1} lg={2}>
                    <Col className="heading-col">
                        <h1>
                            SD Hacks
                            <br />
                            Fellowship
                        </h1>
                        <Button
                            size="lg"
                            href="https://docs.google.com/forms/d/e/1FAIpQLScyXFysR1TbLTtvJuN583BfGo97LCWUX6vyXyUBlE6meTeVQQ/viewform?usp=sf_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3"
                        >
                            Apply Now
                        </Button>
                    </Col>
                    <Col>
                        <img src={HeroImg} alt="" width="80%" />
                    </Col>
                </Row>
            </Container>
        </HeroContainer>
    );
};

const HeroContainer = styled.section`
    background: var(--orange-light);
    padding-top: 5rem;
    padding-bottom: 5rem;

    .heading-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-weight: 800;
            font-size: clamp(2rem, 15vw, 5rem);
            text-align: center;
        }

        p {
            margin-bottom: 3rem;
        }
    }
`;

export default Hero;
