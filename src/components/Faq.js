import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Slide from 'react-reveal/Slide';
import { Parallax } from 'react-scroll-parallax';
import FaqData from '../data/SDHacksFAQ';

import TrainTop from '../assets/svg/train-2.svg';
import Bridge from '../assets/svg/bridge.svg';
import Landscape from '../assets/svg/landscape.svg';
import TrainBottom from '../assets/svg/train-3.svg';

const Faq = () => {
    return (
        <FaqWrapper>
            <div className="train-bridge-container">
                <img src={TrainTop} alt="" className="train-t-img" />
                <Parallax y={[-10, 5]} className="bridge-img" tagOuter="figure">
                    <img src={Bridge} alt="" width="100%" />
                </Parallax>
            </div>
            <Container className="faq mt-5">
                <h1 className="title">
                    frequently asked
                    <br />
                    <span className="sub">QUESTIONS</span>
                </h1>

                <Row>
                    {FaqData.map((obj, i) => (
                        <Col
                            lg={6}
                            md={10}
                            xs={12}
                            key={i}
                            className="card-col"
                        >
                            <div className="card-wrapper">
                                <div className="card-main">
                                    <div className="card-front">
                                        <h2>{obj.question}</h2>
                                    </div>
                                    <div className="card-back">
                                        <h2>{obj.question}</h2>
                                        {obj.answer}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

            <img src={Landscape} alt="" className="landscape-img" />
            <Slide left duration={2500}>
                <img src={TrainBottom} alt="" className="train-b-img" />
            </Slide>
        </FaqWrapper>
    );
};

const FaqWrapper = styled.section`
    background: #d2f6fb;
    position: relative;

    .title {
        font-weight: 900;
        font-size: clamp(2rem, 10vw, 3rem);
        color: var(--dark);
        margin-bottom: 3rem;

        span {
            color: var(--cyan);
        }
    }

    .card-col {
        min-height: 35rem;
    }

    .card-wrapper {
        -webkit-backface-visibility: hidden;
        -webkit-perspective: 1000;
        perspective: 1000px;
        height: 80%;
        width: 85%;
        margin-bottom: 5rem;
    }

    .card-main {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.8s;
        -webkit-transition: -webkit-transform 0.8s;
        transform-style: preserve-3d;
    }

    .card-wrapper:hover .card-main {
        transform: rotateY(180deg);
    }

    .card-front {
        display: flex;
        place-items: center;
        padding: 0 10%;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-shadow: 15px 15px 0px 0px var(--dark);
        background-color: var(--cyan);

        h2 {
            font-size: 2.5rem;
            font-weight: 900;
            color: var(--dark);
        }
    }

    .card-back {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 10%;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        background-color: #181727;
        transform: rotateY(180deg);
        box-shadow: 15px -15px 0px 0px var(--cyan);

        h2 {
            font-size: clamp(1.3rem, 2vw, 1.5rem);
            font-weight: 900;
            color: var(--cyan);
            margin-bottom: 1rem;
        }

        p {
            font-size: clamp(1rem, 1.5vw, 18px);
            color: white;
            margin-bottom: 0;

            a {
                color: var(--cyan);
            }
        }

        p + p {
            margin-top: 1rem;
        }
    }

    @media only screen and (max-width: 768px) {
        .card-wrapper {
            width: 95%;
        }
    }

    .train-bridge-container {
        position: relative;
        top: -60px;
        z-index: 1;
    }

    .train-t-img {
        position: absolute;
        top: -5px;
        left: -35px;
        width: 65%;
    }

    .bridge-img {
        position: relative;
    }

    .landscape-img {
        position: relative;
        bottom: -80px;
        width: 100%;

        @media (max-width: 768px) {
            bottom: -40px;
        }
    }

    .train-b-img {
        position: absolute;
        bottom: -35px;
        left: 0;
        width: 65%;
    }
`;

export default Faq;
