import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const About = () => {
    const AboutSection = styled.section`
    background-color: #393744;
    height: auto;
    width: 100%;
    padding-bottom: 10rem;
    @media-query (max-width: 1200px) {
        height: 50%;
    }
`
    const StyledContainer = styled(Container)`
    color: #FFFFFF;
    height: 30rem;
    width: 100%;
    padding: 6% 10% 0 5%;
    font-family: Trap;
`
    const Title = styled.h1`
    padding-left: 1rem;
    font-weight: 900;
    font-size: 60px;
    line-height: 66px;
    
`
    const Description = styled.p`
    font-weight: 300;
    font-size: 1em;
    line-height: 160%;
`
    const aboutStyle = {
        color: '#d66440',
        fontWeight: '900',
        fontSize: '1em',
    }

    return (
        <AboutSection>
            <StyledContainer>
                <Row>
                    <Col>
                        <Title>
                            <h1 style={aboutStyle}>about</h1>
                            SDHACKS
                        </Title>
                    </Col>
                    <Col xs={8}>
                        <Description>
                            SD Hacks has been one of the largest hackathons in California since its inception back in 2015. We take pride in being a fully student organized event, while partnering with numerous other student-run engineering organizations at UC San Diego.
                            <br/><br/>
                            SD Hacks 2021 will provide the support and mentorship necessary to develop innovative software projects. With mentorship coming from a variety of engineering disciplines and companies, SD Hacks 2021 is shaping up to become an unforgettable 36 hours of collaboration, empowerment, and innovation. This year, SD Hacks will be going completely virtual and bringing the hackathon to you.
                        </Description>
                    </Col>
                </Row>
            </StyledContainer>
        </AboutSection>
    );
};

export default About;
