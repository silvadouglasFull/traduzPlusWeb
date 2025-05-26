import { AnimationSlide } from "@components/animationSlide/slideLeftRight";
import { imageFirstSection } from "@flavor/constants/assets/about/firstSection";
import { paragraphs } from "@flavor/constants/texts/about/firstSection";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import { SubTitle } from "@pages/components/subTitle";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const FirstSection: React.FC = () => {
    return (
        <section className="mb-3">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <SubTitle text="overview" />
                        <p className="font-weight-bold">Noster pars vix falleres valebat est. Ire velox ducunt ad ferox zirbus.</p>
                        <AnimationSlide direction="right">
                            <Paragraph items={paragraphs} />
                            <Button variant="oxford" className="w-100 mb-5 text-uppercase" size="lg">
                                <Link to={'/services'} className="text-decoration-none text-light">
                                    View our Services
                                </Link>
                            </Button>
                        </AnimationSlide>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12} className="text-center">
                        <Image src={imageFirstSection} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}