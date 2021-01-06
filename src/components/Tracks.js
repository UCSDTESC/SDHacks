import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Learning } from '../assets/icons/learning.svg';
import { ReactComponent as Sustainability } from '../assets/icons/sustainability.svg';
import { ReactComponent as Urban } from '../assets/icons/urban.svg';
import { ReactComponent as Civic } from '../assets/icons/civic.svg';

import Building from '../assets/svg/building-jacobs.svg';

const Tracks = () => {
    const [showTrack, setShowTrack] = useState(false);
    const [trackInfo, setTrackInfo] = useState({});
    const handleClose = () => setShowTrack(false);
    const handleShow = (i) => {
        setShowTrack(true);
        setTrackInfo(tracks[i]);
    };

    const tracks = [
        {
            name: 'remote education',
            icon: <Learning />,
            description:
                'In this unprecedented time, families across the United States face challenges associated with the transition to remote learning, whether it be those facing connection inequity, individuals with special needs, or people experiencing homelessness.',
        },
        {
            name: 'sustainability',
            icon: <Sustainability />,
            description:
                'Our climate is changing and it takes a systematic effort to combat it. This track encourages hackers to develop solutions tackling the challenges of climate change or educating the public about the environmental challenges we face.',
        },
        {
            name: 'urban innovation',
            icon: <Urban />,
            description:
                'In a growing society, we require new solutions tackling societal, environmental, and economic issues. This track spans everything from small neighborhood improvements to ambitious endeavors in large cities. Potential solutions include reducing carbon emissions, tackling transportation inequity, infrastructure improvements, or affordable housing.',
        },
        {
            name: 'civic engagement',
            icon: <Civic />,
            description:
                'In a country blighted by many challenges like rising concerns of inequity, and immense social changes, there is a need for more voices to be heard. Hackers are encouraged to develop solutions to amplify the voices of everyday people.',
        },
    ];

    return (
        <TracksSection className="tracks">
            <Container>
                <Row>
                    <Col lg={5} md={12}>
                        <Title>
                            <span>this year's</span>
                            <br />
                            TRACKS
                        </Title>
                    </Col>
                    <Col className="track-container">
                        {tracks.map(({ name, icon }, i) => (
                            <TracksCard onClick={() => handleShow(i)} key={i}>
                                <Row>
                                    <Col md="8">
                                        <div className="track-num">
                                            TRACK {i + 1}
                                        </div>
                                        <div className="track-name">{name}</div>
                                    </Col>
                                    <Col className="svg">{icon}</Col>
                                </Row>
                            </TracksCard>
                        ))}
                    </Col>
                </Row>
            </Container>
            <img src={Building} className="building-img" alt="" />

            <Modal size="lg" show={showTrack} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{trackInfo.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{trackInfo.description}</Modal.Body>
            </Modal>
        </TracksSection>
    );
};

const TracksSection = styled.section`
    background-color: var(--gray);
    position: relative;
    padding: 10rem 0;

    .track-container {
        z-index: 1;
    }

    .building-img {
        position: absolute;
        bottom: 0;
        left: 7em;

        @media (max-width: 992px) {
            opacity: 0.5;
        }

        @media (max-width: 576px) {
            display: none;
        }
    }
`;

const Title = styled.h1`
    color: var(--green);
    font-weight: 900;
    font-size: clamp(2rem, 15vw, 5rem);

    span {
        color: var(--white);
        font-weight: 900;
        font-size: 1em;
    }
`;

const TracksCard = styled.div`
    color: var(--green);
    font-weight: 900;
    border: 0.5em solid;
    border-radius: 1.5em;
    padding-top: 1.5em;
    padding-bottom: 1em;
    margin-bottom: 2.5em;
    cursor: pointer;

    .track-num {
        color: var(--gray);
        background-color: var(--green);
        border-radius: 0 0.4em 0.4em 0;
        padding: 0.2em 0.5em;
        padding-bottom: 0.1em;
        width: fit-content;
        text-align: center;
    }

    .track-name {
        font-size: clamp(1rem, 10vw, 3rem);
        text-shadow: 0px 6px #201f26;

        margin-left: 1em;
    }

    .svg {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Tracks;
