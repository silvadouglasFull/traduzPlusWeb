import { imageFirstSection } from "@flavor/constants/assets/about/firstSection";
import { subTitles } from "@flavor/constants/texts/about/firstSection";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import type { Paragraph as TParagraph } from "@pages/components/paragraph/item/types";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Right: React.FC<TParagraph> = ({ id, language, text: paragraph, mida }: TParagraph) => {
    const { textButton } = useChangeLanguageSubTitle(subTitles)
    return (
        <section className="mb-3">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <Paragraph items={[{
                            id,
                            language,
                            text: paragraph
                        }]} />
                        <Button variant="oxford" className="w-100 mb-5 text-uppercase" size="lg">
                            <Link to={'/services'} className="text-decoration-none text-light">
                                {textButton}
                            </Link>
                        </Button>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12} className="text-center">
                        <Image src={mida || imageFirstSection} direction="right" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}