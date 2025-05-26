import { ServicesList } from '@components/list/services';
import { servicesList } from '@flavor/constants/servicesList';
import { paragraphs } from '@flavor/constants/texts/home/secoundSection';
import { Paragraph } from '@pages/components/paragraph';
import { SubTitle } from '@pages/components/subTitle';
import { useChangeLanguage } from "@pages/home/layouts/hooks/useChangeLanguage";
import { styles } from '@pages/home/styles';
import type React from 'react';
import { Container } from 'react-bootstrap';
export const SecoundSection: React.FC = () => {
    const { items } = useChangeLanguage(paragraphs)
    return (
        <section className="p-3 text-center mb-3" style={styles.bgPrimaryGradient}>
            <Container className='mt-5'>
                <SubTitle text='What we offer' />
                <Paragraph items={items} />
                <ServicesList items={servicesList} />
            </Container>
        </section>
    )
}