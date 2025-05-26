import { AnimationSlide } from "@components/animationSlide/slideLeftRight";
import { paragraphs } from "@flavor/constants/texts/firstSection";
import { SubTitle } from "@pages/components/subTitle";
import { Paragraph } from "@pages/home/components/paragraph";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
export const FirstSection: React.FC = () => {
    return (
        <section>
            <Container>
                <Row className="justify-content-center justify-content-lg-between flex-lg-row-reverse align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <SubTitle text="A Few Words About us" />
                        <AnimationSlide direction="right">
                            <Paragraph items={paragraphs} />
                            <Button variant="oxford" className="w-100 mb-5" size="lg">
                                Learn More
                            </Button>
                        </AnimationSlide>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12}>
                        {/* <Image src={imageFromFirstSection} /> */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}