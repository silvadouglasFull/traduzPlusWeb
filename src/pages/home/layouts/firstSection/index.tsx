import imageFromFirstSection from "@assets/greatNewSoluctions/images/large-features-3-570x368.jpg";
import { paragraphs, subTitle } from "@flavor/constants/texts/home/firstSection";
import { useChangeLanguage } from "@hooks/useChangeLanguage/paragraphs";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import { SubTitle } from "@pages/components/subTitle";
import { styles } from "@pages/home/styles";
import type React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const FirstSection: React.FC = () => {
    const { items } = useChangeLanguage(paragraphs)
    const { text, textButton } = useChangeLanguageSubTitle(subTitle)
    return (
        <section className="mb-3 p-3">
            <Container style={styles.container}>
                <Row className="justify-content-center align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <SubTitle text={text} />
                        <Paragraph items={items} />
                        <Button variant="oxford" className="w-100 mb-5 text-uppercase" size="lg">
                            <Link to={'/about'} className="text-decoration-none text-light">
                                {textButton}
                            </Link>
                        </Button>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12}>
                        <Image src={imageFromFirstSection} direction="right" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}