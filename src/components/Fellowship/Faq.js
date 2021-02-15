import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

const Faq = () => {
    return (
        <FaqContainer className="faq">
            <Container>
                <h1
                    style={{
                        fontWeight: '900',
                        fontSize: 'clamp(2rem, 15vw, 5rem)',
                    }}
                >
                    Frequently Asked Questions
                </h1>
                <Row md={1} sm={1}>
                    {FaqData.map((d, i) => (
                        <Col key={i} className="my-3">
                            <div>
                                <h2>{d.question}</h2>
                                <p>{d.answer}</p>
                            </div>
                        </Col>
                    ))}

                    <Col className="my-3">
                        <div className="questionAnswer">
                            <h2>More questions?</h2>
                            <p>
                                Contact us at{' '}
                                <a href="mailto:sdhacks@tesc.ucsd.edu">
                                    sdhacks@tesc.ucsd.edu
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FaqContainer>
    );
};
const FaqData = [
    {
        question: "Who's the Fellowship for?",
        answer:
            "SD Hacks Fellowship serves those interested in continuing their SD Hacks projects as something bigger - either startups, non-profits, or impactful side-projects. (But you don't have to strictly stick with your idea from SD Hacks.)",
    },
    {
        question: "Is the program virtual or in-person?",
        answer:
            "Our 2021 program will be remote. All the primary events including workshops, speaker events, mentorship sessions, and Demo Day will be held virtually. If the on-campus co-working space becomes available in the spring quarter, Fellows’ use of it will be optional.",
    },
    {
        question: "What's the application process like?",
        answer:
            'One written application and one 30 mins interview. Application opens on February 15th, 2021, and closes on February 26th, 2021.',
    },
    {
        question: "Who's eligible to apply?",
        answer:
            'An applicant needs to be a team of 2 - 4 UCSD students. At least one of the team members needs to be a participant in SD Hacks 2021. Both undergrad and grad students are welcome.',
    },
    {
        question: 'What do you look for in the applicants?',
        answer:
            "Make sure you really know the problem you're going to tackle as well as the technical skillsets that you'll need. We like applicants who truly care about the problem of their focus and who are confident in their technical abilities.",    },
    {
        question: 'Do I need previous startup experience?',
        answer: 'No.',
    },
    {
        question: 'How many Fellows do you select?',
        answer: '10 - 20 students for SD Hacks Fellowship 2021.',
    },
    {
        question: 'What is the expected time commitment?',
        answer:
            "8+ hrs/week. You're going to attend 1 or 2 workshops and/or speaker events every week. SD Hacks 2021 will kick off on March 8th and end on May 21st.",
    },
    {
        question: 'Do you take equity?',
        answer: 'No. Our only interest is you.',
    },
];

const FaqContainer = styled.section`
    background-color: var(--orange-light);
    color: var(--dark);
    padding: 5% 0;

    a {
        font-weight: bold;
        color: var(--dark);
    }

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
export default Faq;
