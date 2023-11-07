import React from 'react';

const sdFaqData = [
    {
        question: 'What is a hackathon?',
        answer: (
            <p>
                A hackathon is an event, typically lasting multiple days, in
                which a large number of people meet to collaboratively build out
                their ideas using technology.
            </p>
        ),
    },
    {
        question: 'What should I bring?',
        answer: (
            <p>
                Bring your student ID, computer, any external peripherals you may
                need (chargers, monitors, etc.), any other hardware that you definitely
                plan on using, and an open mind. Also bring a change of clothes, a
                toothbrush, and any other toiletries you may need. You may also bring a
                sleeping bag if you plan to nap.
            </p>
        ),
    },
    {
        question: 'Who can attend?',
        answer: (
            <p>
                All college and university students from anywhere in the world
                are eligible. This includes graduate students, but be sure to
                understand any agreements you’ve made with your university with
                regards to research and IP.
            </p>
        ),
    },
    {
        question: "What if I don't have a team?",
        answer: (
            <p>
                We will host a team formation event at the beginning of the
                hackathon so that no one has to hack alone (unless they want
                to). We allow teams of up to four hackers. If you do have a
                team, we will do our best to accept you all. Make sure ALL
                members apply and join the same team by using your unique team
                code.
            </p>
        ),
    },
    {
        question: 'How big can teams be?',
        answer: <p>Teams at SD Hacks can have up to 4 people.</p>,
    },
    {
        question: 'Is there a registration fee?',
        answer: <p>SD Hacks is completely free for participants!</p>,
    },
    {
        question: 'What can I build or design?',
        answer: (
            <p>
                You can build anything you can think of, including web apps,
                mobile apps, hardware hacks, and other software projects that
                cater to the hackathon tracks.
            </p>
        ),
    },
    {
        question: 'What do volunteers and mentors do?',
        answer: (
            <>
                <p>
                    General volunteers help out with logistics such as technical
                    workshops, social events, and other areas to make SD Hacks
                    possible!
                </p>
                <p>
                    Mentors assist students with their projects when they are
                    stuck. They'll be available to help students with any
                    questions they might have, especially technical questions in
                    a domain the mentor is familiar with.
                </p>
            </>
        ),
    },
    {
        question: 'Are there any rules?',
        answer: (
            <p>
                We are adopting Major
                League Hacking’s{' '}
                <a
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Code of Conduct
                </a>
                , which requires you to respect others and help us keep SD Hacks
                a safe space for everyone. If you want your project to be
                considered for an award, you may only submit work that your team
                wrote during the hackathon.
            </p>
        ),
    },
];

export default sdFaqData;
