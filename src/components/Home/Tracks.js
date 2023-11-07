import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import styled from 'styled-components';

import { ReactComponent as Learning } from '../../assets/icons/learning.svg';
import { ReactComponent as Sustainability } from '../../assets/icons/sustainability.svg';
import { ReactComponent as Integrity } from '../../assets/icons/integrity.svg';
import { ReactComponent as SupplyChain } from '../../assets/icons/supplychain.svg';

import Building from '../../assets/svg/building-jacobs.svg';

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
            name: 'health/wellness',
            icon: <Sustainability />,
            description:
            'Americans today face pressing health and wellness challenges. This track encourages hackers to develop solutions that improve healthcare, mental health, fitness, or general well-being.'
        },
        {
            name: 'cyber integrity',
            icon: <Integrity />,
            description:
                'In an era of growing cyber threats, misinformation, and privacy concerns, this track challenges hackers to innovate solutions that ensure the integrity of online spaces, protect users, and combat malicious activities.',
        },
        {
            name: 'education',
            icon: <Learning />,
            description:
                'With the rapid transformation of education in the digital era, this track encapsulates technological solutions that address evolving needs in teaching and learning.',
        },
        {
            name: 'supply chain',
            icon: <SupplyChain />,
            description:
                'In an interconnected world, supply chain disruptions are more impactful than ever. This track challenges hackers to create innovative solutions that enhance the efficiency, transparency, and resilience of supply chains, ensuring the smooth flow of goods and minimizing disruptions in times of crisis.',
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
