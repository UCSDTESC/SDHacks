import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Building } from '../assets/building-hero.svg';
import { ReactComponent as Train } from '../assets/train.svg';
import { ReactComponent as Trees } from '../assets/trees.svg';

const Hero = () => {
    return (
        <HeroWrapper>
            <Container className="mb-5">
                <h1>
                    <span>SD</span>
                    <br />
                    hacks
                </h1>
                <h2>February 19-21, 2021</h2>
                <h3 className="mb-4">Completely Virtual</h3>
                <Button
                    size="lg"
                    href="https://www.tesc.events/register/sdhacks2021"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Apply Now
                </Button>
            </Container>
            <Building className="building-img" />
            <Train className="train-img" />
            <Trees className="trees-img" />
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    height: 85vh;
    min-height: 800px;
    background-color: var(--orange-light);
    display: flex;
    align-items: center;
    position: relative;

    .container {
        z-index: 1;
    }

    h1 {
        font-weight: 900;
        font-size: clamp(5rem, 30vw, 11rem);
        line-height: 0.6em;

        span {
            color: var(--orange);
            position: relative;
            left: 0.3em;
        }
    }

    h2 {
        font-weight: 700;
        font-size: clamp(1.5rem, 7vw, 3.75rem);
        color: var(--orange);
    }

    .building-img {
        position: absolute;
        top: 0;
        right: 0;
        width: 30%;

        @media (max-width: 576px) {
            display: none;
        }
    }

    .train-img {
        position: absolute;
        bottom: -2px;
        left: -5px;
    }

    .trees-img {
        position: absolute;
        bottom: -55px;
        right: 0;
    }
`;

export default Hero;
