import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Hero = () => {
    return (
        <HeroWrapper>
            <Container>Hero!</Container>
        </HeroWrapper>
    );
};

const HeroWrapper = styled.section`
    min-height: 85vh;
    background-color: var(--orange-light);
`;

export default Hero;
