import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';
const About = () => {
    return (
        <AboutContainer>
            <Container>
                <h1
                    style={{
                        fontWeight: '800',
                        fontSize: 'clamp(2rem, 15vw, 5rem)',
                    }}
                >
                    About
                </h1>
                <div
                    style={{
                        fontWeight: '150',
                        fontSize: '30px',
                    }}
                >
                    <p>
                        SD Hacks is where the best student hackers gather and
                        work on innovative projects. Then, why are we letting
                        these projects stay stale on GitHub repositories after
                        the event?{' '}
                    </p>{' '}
                    <p></p>
                    <p>
                        This simple question drove us to create SD Hacks
                        Fellowship. SD Hacks Fellowship is a 10-week accelerator
                        program for those interested in continuing their SD
                        Hacks projects as something bigger - either startups,
                        non-profit organizations, or impactful side-projects. SD
                        Hacks Fellowship is an infrastructure where the best
                        "hacks" at SD Hacks will grow way beyond just hackathon
                        projects. Join our community of growth-minded talented
                        engineers and get support to build your big things.
                    </p>
                </div>
            </Container>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
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
export default About;
