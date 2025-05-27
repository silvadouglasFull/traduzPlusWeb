import { ServicesList } from '@components/list/services';
import { servicesList } from '@flavor/constants/servicesList';
import { paragraphs, subTitle } from '@flavor/constants/texts/home/secoundSection';
import { useChangeLanguage } from "@hooks/useChangeLanguage/paragraphs";
import { useChangeLanguage as useChangeLanguageService } from "@hooks/useChangeLanguage/services";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import { Paragraph } from '@pages/components/paragraph';
import { SubTitle } from '@pages/components/subTitle';
import { styles } from '@pages/home/styles';
import type React from 'react';
import { Container } from 'react-bootstrap';
export const SecoundSection: React.FC = () => {
    const { items } = useChangeLanguage(paragraphs)
    const { text } = useChangeLanguageSubTitle(subTitle)
    const { items: services } = useChangeLanguageService(servicesList)
    return (
        <section className="p-3 text-center mb-3" style={styles.bgPrimaryGradient}>
            <Container className='mt-5'>
                <SubTitle text={text} />
                <Paragraph items={items} />
                <ServicesList items={services} />
            </Container>
        </section>
    )
}