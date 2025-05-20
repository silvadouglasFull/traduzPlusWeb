import imageFromFourthSection from "@assets/traduzPlus/images/accordions-1-470x368.jpg";
import { accordions } from "@flavor/constants/texts/fourthSection";
import { useInView } from "@hooks/useInView";
import { Image } from "@pagesHome/components/image";
import { SubTitle } from "@pagesHome/components/subTitle";
import { Accordion } from "@pagesHome/layouts/fourthSession/components/accordion";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export const FourthSession: React.FC = () => {
    const [imageRef, isVisible] = useInView<HTMLDivElement>();
    return (
        <section className="p-3 mb-3">
            <Container>
                <Row className="justify-content-center justify-content-lg-between flex-lg-row-reverse align-items-center">
                    <Col lg={7} xl={6}>
                        <SubTitle text="Frequently Asked Questions" />
                        <Accordion items={accordions} />
                    </Col>
                    <Col>
                        <div
                            ref={imageRef}
                            className={`image-slide-in ${isVisible ? "visible" : ""}`}
                            id="imageFromFourthSection"
                        >
                            <Image src={imageFromFourthSection} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}