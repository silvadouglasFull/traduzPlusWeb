import imageFromFourthSection from "@assets/traduzPlus/images/accordions-1-470x368.jpg";
import { useInView } from "@hooks/useInView";
import { Image } from "@pagesHome/components/image";
import { SubTitle } from "@pagesHome/components/subTitle";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export const FourthSession: React.FC = () => {
    const [imageRef, isVisible] = useInView<HTMLDivElement>();
    return (
        <section>
            <Container>
                <Row className="justify-content-center justify-content-lg-between flex-lg-row-reverse align-items-center">
                    <Col lg={7} xl={6}>
                        <SubTitle text="Frequently Asked Questions" />
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