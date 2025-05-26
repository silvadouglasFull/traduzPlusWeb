import imageFromFourthSection from "@assets/traduzPlus/images/accordions-1-470x368.jpg";
import { AnimationSlide } from "@components/animationSlide/slideLeftRight";
import { accordions } from "@flavor/constants/texts/fourthSection";
import { SubTitle } from "@pages/components/subTitle";
import { styles } from "@pages/home/styles";
import { Image } from "@pagesHome/components/image";
import { Accordion } from "@pagesHome/layouts/fourthSession/components/accordion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export const FourthSession: React.FC = () => {
    return (
        <section className="p-3 mb-3">
            <Container style={styles.container}>
                <Row className="justify-content-center justify-content-lg-between flex-lg-row-reverse align-items-center">
                    <Col lg={7} xl={6} className="mt-5">
                        <SubTitle text="Frequently Asked Questions" />
                        <AnimationSlide direction="right">
                            <Accordion items={accordions} />
                        </AnimationSlide>
                    </Col>
                    <Col>
                        <Image src={imageFromFourthSection} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}