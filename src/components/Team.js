import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

import teamData from '../data/teamData';
import Building from '../assets/svg/building-footer-tl.svg';

const Team = () => {
    return (
        <TeamSection>
            <Container>
                <TeamHeader>
                    meet the <span style={{ color: '#81CB72' }}>team</span>
                </TeamHeader>
                <Row className="justify-content-center">
                    {teamData.map(({ img, name, position }, i) => (
                        <Col
                            key={i}
                            lg={position === 'SD Hacks Co-Director' ? 6 : 4}
                            md={6}
                            xs={12}
                        >
                            <Profile>
                                <img src={img} alt={name} width="100%" />
                                <div className="profile-content">
                                    <h1>{name}</h1>
                                    {<h2>{position}</h2>}
                                </div>
                            </Profile>
                        </Col>
                    ))}
                </Row>
            </Container>
            <img
                src={Building}
                alt=""
                css={`
                    position: absolute;
                    bottom: 0;
                    width: 20%;
                `}
            />
        </TeamSection>
    );
};

const TeamSection = styled.section`
    background-color: var(--dark);
    position: relative;
`;

const TeamHeader = styled.h1`
    color: white;
    margin-bottom: 1.5em;
    text-align: center;
    font-weight: 900;
    font-size: 3rem;
`;

const Profile = styled.div`
    position: relative;
    text-align: center;
    border-radius: 100%;
    overflow: hidden;
    width: clamp(17rem, 40vw, 20rem);
    height: clamp(17rem, 40vw, 20rem);
    margin: 3rem auto;
    z-index: 1;

    .profile-content {
        width: 100%;
        position: absolute;
        bottom: 0;
        text-align: center;
        background: white;
        height: 25%;
        padding-top: 0.5rem;

        h1 {
            font-size: 18px;
            font-weight: 900;
            color: var(--green);
            margin-bottom: 2px;
        }

        h2 {
            font-size: 14px;
            color: var(--dark);
        }
    }
`;

export default Team;
