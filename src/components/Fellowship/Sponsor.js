import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

import notion from '../../assets/sponsors/notion.png';
import northrop from '../../assets/sponsors/northrop.svg';
import WS from '../../assets/sponsors/WilsonSonsini.jpg';
import kuzo from '../../assets/sponsors/KuzoClass.png';
import fb from '../../assets/sponsors/Facebook.png';
import echoar from '../../assets/sponsors/echoAR.png';
import datastax from '../../assets/sponsors/DataStax.png';
import ofos from '../../assets/sponsors/1517.png';
import gc from '../../assets/sponsors/GoogleCloud.png';

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
import hkn from '../../assets/partners/hkn.png';

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
    padding: 10%;
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

const tierTwoSponsor = [
    {
        name: 'Northrop Grumman',
        logo: northrop,
        link: 'https://www.northropgrumman.com/Pages/default.aspx',
        width: '100',
    },
    {
        name: '1517',
        logo: ofos,
        link: 'https://www.1517fund.com/',
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
        width: '60',
    },
    {
        name: 'Facebook',
        logo: fb,
        link: 'https://about.fb.com/',
        width: '90',
    },
    {
        name: 'KuzoClass',
        logo: kuzo,
        link: 'https://kuzoclass.com/',
        width: '90',
    },
    {
        name: 'Notion',
        logo: notion,
        link: 'https://www.notion.so/product',
        width: '80',
    },
    {
        name: 'Google Cloud',
        logo: gc,
        link: 'https://cloud.google.com/',
        width: '80',
    },
    {
        name: 'Wilson Sonsini',
        logo: WS,
        link: 'https://www.wsgr.com/en/',
        width: '80',
    },
].map((x) => ({ ...x, tier: 1 }));

const tierOnePartner = [
    {
        name: 'ACM',
        logo: acm,
        link: 'http://www.acm.org/',
        width: '80',
    },
    {
        name: 'WIC',
        logo: wic,
        link: 'https://wic.ucsd.edu/',
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
        name: 'SWE',
        logo: swe,
        link: 'http://swe.ucsd.edu/',
        width: '100',
    },
    {
        name: 'Open Source',
        logo: os,
        link: 'https://os-ucsd.ucsd.edu/',
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
        name: 'HKN',
        logo: hkn,
        link: 'https://hkn.ucsd.edu/',
        width: '100',
    },
].map((x) => ({ ...x, tier: 3 }));

export default Sponsors;
