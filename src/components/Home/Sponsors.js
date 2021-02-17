import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

import northrop from '../../assets/sponsors/northrop.svg';
import kuzo from '../../assets/sponsors/KuzoClass.png';
import fb from '../../assets/sponsors/Facebook.png';
import echoar from '../../assets/sponsors/echoAR.png';
import datastax from '../../assets/sponsors/DataStax.png';
import wolfram from '../../assets/sponsors/wolfram.svg';
import sm from '../../assets/sponsors/sticker-mule.svg';
import cse from '../../assets/sponsors/jsoe-cse.svg';
import sdsc from '../../assets/sponsors/SDSC.jpg';
import gc from '../../assets/sponsors/GoogleCloud.png';
import aws from '../../assets/sponsors/aws.png';

import acm from '../../assets/partners/acm.png';
import wic from '../../assets/partners/wic.png';
import cses from '../../assets/partners/cses.png';
import ds3 from '../../assets/partners/ds3.png';
import esw from '../../assets/partners/esw.jpeg';
import ieee from '../../assets/partners/ieee.png';
import swe from '../../assets/partners/swe.png';
import os from '../../assets/partners/OpenSource.png';
import tbp from '../../assets/partners/tbp.png';
import tlg from '../../assets/partners/tlg.png';

function Sponsor(props) {
    const col = props.col || 'col-md-4 col-lg-4';

    return (
        <a
            className={`${col} my-5 d-block`}
            href={props.link}
            target="_blank"
            rel="noreferrer noopener"
        >
            <img
                src={props.logo}
                className={`img-fluid d-block m-auto  ${props.className}`}
                alt=""
                width={`${props.width}%`}
            />
        </a>
    );
}

function renderSponsors(currSponsors) {
    const COL_LENS = [
        'col-md-9 col-lg-9',
        'col-md-4 col-lg-4',
        'col-md-3 col-md-3',
        'col-md-2 col-md-2',
    ];
    return currSponsors.map((p, i) => (
        <Sponsor {...p} col={COL_LENS[p.tier]} key={i} />
    ));
}

const Sponsors = () => {
    return (
        <SponsorsSection className="sponsors">
            <Container>
                <SectionContent>
                    <SectionHeader>
                        <span
                            css={`
                                color: var(--cyan);
                            `}
                        >
                            SPONSORS
                        </span>
                    </SectionHeader>
                    <SponsorContent>
                        <div className="row align-items-center justify-content-center">
                            {renderSponsors(tierOneSponsor)}
                        </div>
                        <div className="row align-items-center justify-content-center">
                            {renderSponsors(tierTwoSponsor)}
                        </div>
                    </SponsorContent>

                    <SectionHeader
                        css={`
                            color: var(--cyan);
                        `}
                    >
                        PARTNERS
                    </SectionHeader>
                    <SponsorContent>
                        <div className="row align-items-center justify-content-center">
                            {renderSponsors(tierOnePartner)}
                        </div>
                    </SponsorContent>
                    <div className="row">
                        <div className="col-md-6"></div>
                        <div className="col-md-6"></div>
                    </div>
                </SectionContent>
            </Container>
        </SponsorsSection>
    );
};

const SponsorsSection = styled.section`
    background-color: var(--dark);
    padding: 8%;
`;

const SectionContent = styled.div`
    font-size: 1.3rem;
    color: white;
`;

const SectionHeader = styled.h1`
    color: white;
    font-weight: 900;
    font-size: clamp(2rem, 15vw, 5rem);
    margin-bottom: 3rem;
`;

const SponsorContent = styled(SectionContent)`
    background: white;
    border-radius: 45px;
    padding: 3rem;
    margin-bottom: 5rem;
`;

const tierOneSponsor = [
    {
        name: 'Northrop Grumman',
        logo: northrop,
        link: 'https://www.northropgrumman.com/Pages/default.aspx',
        width: '100',
    },
].map((x) => ({ ...x, tier: 0 }));

const tierTwoSponsor = [
    {
        name: 'Amazon Web Services',
        logo: aws,
        link: 'https://aws.amazon.com/',
        width: '60',
    },
    {
        name: 'UCSD CSE',
        logo: cse,
        link: 'https://cse.ucsd.edu/',
        size: '100',
    },
    {
        name: 'DataStax',
        logo: datastax,
        link: 'https://www.datastax.com/',
        size: '100',
    },
    {
        name: 'echoAR',
        logo: echoar,
        link:
            'https://www.echoar.xyz/?gclid=Cj0KCQiAmL-ABhDFARIsAKywVaeWJMRPefyrDjU0z2apexRWkVvPVJU9rFZjWPjlyBBjMYzLLVTqke4aAhAAEALw_wcB',
        width: '80',
    },
    {
        name: 'Facebook',
        logo: fb,
        link: 'https://about.fb.com/',
        width: '90',
    },
    {
        name: 'Google Cloud',
        logo: gc,
        link: 'https://cloud.google.com/',
        width: '90',
    },
    {
        name: 'KuzoClass',
        logo: kuzo,
        link: 'https://kuzoclass.com/',
        width: '90',
    },
    {
        name: 'Stickermule',
        logo: sm,
        link: 'http://hackp.ac/mlh-stickermule-hackathons',
        width: '100',
    },
    {
        name: 'San Diego Supercomputer Center',
        logo: sdsc,
        link: 'https://www.sdsc.edu/',
        width: '100',
    },
    {
        name: 'Wolfram',
        logo: wolfram,
        link: 'https://www.wolfram.com/',
        width: '80',
    },
].map((x) => ({ ...x, tier: 1 }));

const tierOnePartner = [
    {
        name: 'ACM',
        logo: acm,
        link: 'https://acmucsd.com/',
        width: '80',
    },
    {
        name: 'CSES',
        logo: cses,
        link: 'https://cses.ucsd.edu/#/',
        width: '100',
    },
    {
        name: 'DS3',
        logo: ds3,
        link: 'https://www.facebook.com/DS3UCSD/',
        width: '100',
    },
    {
        name: 'ESW',
        logo: esw,
        link: 'https://eswtritons.wordpress.com',
        width: '100',
    },
    {
        name: 'IEEE',
        logo: ieee,
        link: 'http://www.ieee.org/portal/index.jsp',
        width: '100',
    },
    {
        name: 'Open Source',
        logo: os,
        link: 'https://os-ucsd.ucsd.edu/',
        width: '100',
    },
    {
        name: 'SWE',
        logo: swe,
        link: 'http://swe.ucsd.edu/',
        width: '100',
    },
    {
        name: 'Tau Beta Pi',
        logo: tbp,
        link: 'https://tbp.ucsd.edu/home',
        width: '70',
    },
    {
        name: 'Triton LinkedIn Group',
        logo: tlg,
        link: 'https://www.linkedin.com/company/triton-linkedin-group/',
        width: '80',
    },
    {
        name: 'WIC',
        logo: wic,
        link: 'https://wic.ucsd.edu/',
        width: '80',
    },
].map((x) => ({ ...x, tier: 3 }));

export default Sponsors;
