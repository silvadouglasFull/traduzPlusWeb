import { sections } from "@constants/index";
import { imageFromThirSection } from "@flavor/constants/assets/home/thirdSection";
import { paragraphs, subTitle } from "@flavor/constants/texts/home/thirdSection";
import { useChangeLanguage } from "@hooks/useChangeLanguage/paragraphs";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import { SubTitle } from "@pages/components/subTitle";
import { ParagraphLight } from "@pages/home/layouts/thirdSession/components";
import { styles } from "@pagesHome/layouts/thirdSession/styles";
import type React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ThirdSession: React.FC = () => {
    const { items } = useChangeLanguage(paragraphs)
    const { description, text, textButton } = useChangeLanguageSubTitle(subTitle)
    return (
        <section className="p-3 mb-3" id={sections.home.greatExpertise}>
            <Container className="d-block d-lg-none">
                <Row className='row justify-content-center'>
                    <Col md={12} lg={1} sm={12} className="mb-3">
                        <Image src={imageFromThirSection} />
                    </Col>
                    <Col md={12} lg={11} sm={12}>
                        <ParagraphLight style={{
                            fontSize: '1.125rem'
                        }} text={description ?? ''} />
                        <SubTitle text={text} applyShadown={false} />
                        <Paragraph items={items} />
                        <Button variant="oxford" className="w-100 text-uppercase" size="lg">
                            <Link to={'/services'} className="text-decoration-none text-light">
                                {textButton}
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container style={styles} className="d-none d-lg-flex justify-content-end">
                <div className="w-50 p-5">
                    <ParagraphLight style={{
                        fontSize: '.875rem'
                    }} text={description ?? ''} />
                    <SubTitle text={text} applyShadown={false} />
                    <Paragraph items={items} />
                    <Button variant="oxford" className="w-100 text-uppercase" size="lg">
                        <Link to={'/services'} className="text-decoration-none text-light">
                            {textButton}
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}