import { HomemMulherVendoUmLivro } from "@flavor/constants/assets/about/firstSection";
import { subTitles } from "@flavor/constants/texts/about/firstSection";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import type { LayoutProps } from "@pages/aboutUs/layouts/firstSection/layouts/types";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Left: React.FC<LayoutProps> = ({ id, language, text: paragraph, midia, showButton }: LayoutProps) => {
    const { textButton } = useChangeLanguageSubTitle(subTitles)
    return (
        <section className="mb-3">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <Image src={midia ?? HomemMulherVendoUmLivro} />
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12} className="text-center">
                        <Paragraph items={[{
                            id,
                            language,
                            text: paragraph
                        }]} />
                        {showButton ? (
                            <Button variant="outline-light" className="w-100 mb-5 text-uppercase" size="lg">
                                <Link to={'/services'} className="text-decoration-none text-light">
                                    {textButton}
                                </Link>
                            </Button>
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}