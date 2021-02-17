import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import 'styled-components/macro';

import notion from '../../assets/sponsors/notion.png';
import WS from '../../assets/sponsors/WilsonSonsini.png';
import ofos from '../../assets/sponsors/1517.png';
import gc from '../../assets/sponsors/GoogleCloud.png';
import aws from '../../assets/sponsors/aws.png';
import basement from '../../assets/sponsors/Basement.jpg';
import pear from '../../assets/sponsors/PearVC.png';
import stripe from '../../assets/sponsors/stripe.png';

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
        'col-md-6 col-lg-6',
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
                            SPONSORS & PARTNERS
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
        name: '1517',
        logo: ofos,
        link: 'https://www.1517fund.com/',
        size: '60',
    },
    {
        name: 'Wilson Sonsini',
        logo: WS,
        link: 'https://www.wsgr.com/en/',
        width: '80',
    },
].map((x) => ({ ...x, tier: 0 }));

const tierTwoSponsor = [
    {
        name: 'Pear Venture Capital',
        logo: pear,
        link: 'https://www.pear.vc/',
        width: '60',
    },
    {
        name: 'Basement - UCSD',
        logo: basement,
        link: 'https://www.ucsdbasement.com/',
        size: '100',
    },
    {
        name: 'Amazon Web Services',
        logo: aws,
        link: 'https://aws.amazon.com/',
        width: '60',
    },
    {
        name: 'Google Cloud',
        logo: gc,
        link: 'https://cloud.google.com/',
        width: '90',
    },
    {
        name: 'Notion',
        logo: notion,
        link: 'https://www.notion.so/product',
        width: '50',
    },
    {
        name: 'Stripe',
        logo: stripe,
        link: 'https://stripe.com/?utm_campaign=paid_brand-US_Search_Brand_Stripe-1803852691&utm_medium=cpc&utm_source=google&ad_content=448938759726&utm_term=sripe&utm_matchtype=e&utm_adposition=&utm_device=c&gclid=Cj0KCQiAyJOBBhDCARIsAJG2h5clE-6uJWWiNLFJskO2i8XckYBYzm_AS5VlNL2MJaTrjLFkndD2FPkaAp2_EALw_wcB',
        width: '80',
    },

].map((x) => ({ ...x, tier: 1 }));

export default Sponsors;