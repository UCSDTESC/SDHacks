import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';
const provide = () => {
    return (
        <ProvideContainer>
            <Container>
                <h1
                    style={{
                        fontWeight: '900',
                        fontSize: 'clamp(2rem, 15vw, 5rem)',
                    }}
                >
                    What We Provide
                </h1>
                <Row md={1} sm={1}>
                    {provideInfo.map((infos, i) => (
                        <Col key={i} lg={6} className="my-4">
                            <h2>{infos.title}</h2>
                            <p>{infos.info}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </ProvideContainer>
    );
};

const provideInfo = [
    {
        title: 'Equity-free Grant',
        info:
            'We provide up to $1000 equity-free grants to each team to grow and scale your project.',
    },
    {
        title: 'Entrepreneurship Curriculum',
        info:
            'We host weekly workshops and speaker events to help founders learn to scale. Workshop topics include product, users, marketing, pitching, and more.',
    },
    {
        title: 'Mentorship',
        info:
            'Learn from experienced founders, investors, and industry specialists off-the-record.',
    },
    {
        title: 'Community',
        info:
            'Be part of our growth-minded community of the best engineers at UCSD! We also connect you with the startup ecosystems of San Diego and Silicon Valley with support from our partners.',
    },
    {
        title: 'Resources',
        info:
            'AWS, Google Cloud, Stripe, and Notion credits. Co-working space and hardware facility at The Basement on UCSD campus. (Subject to change for 2021.)',
    },
    {
        title: 'Demo Day',
        info:
            'At the end of the program, show off your work at Demo Day! Pitch your project to investors to bring it to the next level.',
    },
];

const ProvideContainer = styled.div`
    background-color: var(--orange-light);
    color: var(--dark);
    padding: 5% 0;

    h1 {
        text-align: center;
        margin-bottom: 2%;
    }
    h2 {
        color: var(--gray);
    }
    p {
        font-size: 80%;
    }
`;
export default provide;
