import { ServicesList } from '@components/list/services';
import { servicesList } from '@flavor/constants/servicesList';
import { paragraphs } from "@flavor/constants/texts/secoundSection";
import { SubTitle } from '@pages/components/subTitle';
import { Paragraph } from '@pages/home/components/paragraph';
import { styles } from '@pages/home/styles';
import React from "react";
import { Container } from 'react-bootstrap';
export const SecoundSection: React.FC = () => {
    return (
        <section className="p-3 text-center mb-3" style={styles.bgPrimaryGradient}>
            <Container className='mt-5'>
                <SubTitle text='What we offer' />
                <Paragraph items={paragraphs} />
                <ServicesList items={servicesList} />
            </Container>
        </section>
    )
}