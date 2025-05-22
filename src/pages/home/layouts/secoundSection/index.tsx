import { ServicesList } from '@components/list/services';
import { servicesList } from '@flavor/constants/servicesList';
import { paragraphs } from "@flavor/constants/texts/secoundSection";
import { Paragraph } from '@pages/home/components/paragraph';
import { SubTitle } from '@pages/home/components/subTitle';
import '@pagesHome/styles/index.css';
import React from "react";
import { Container } from 'react-bootstrap';
export const SecoundSection: React.FC = () => {
    return (
        <section className="p-3 text-center bg-primary-gradient mb-3">
            <Container className='mt-5'>
                <SubTitle text='What we offer' />
                <Paragraph items={paragraphs} />
                <ServicesList items={servicesList} />
            </Container>
        </section>
    )
}