import imageFromFirstSection from "@assets/traduzPlus/images/large-features-3-570x368.jpg";
import { paragraphs } from "@flavor/constants/texts";
import { useInView } from "@hooks/useInView";
import { Image } from "@pagesHome/components/image";
import { Paragraph } from "@pagesHome/components/paragraph";
import { SubTitle } from "@pagesHome/components/subTitle";

import type React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
export const FirstSection: React.FC = () => {
    const [imageRef, isVisible] = useInView<HTMLDivElement>();
    return (
        <section className="mb-3 p-3">
            <Container>
                <Row className="justify-content-center justify-content-lg-between flex-lg-row-reverse align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <SubTitle text="A Few Words About us" />
                        <Paragraph items={paragraphs} />
                        <Button variant="primary" className="w-100 mb-5" size="lg">
                            Learn More
                        </Button>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12}>
                        <div
                            ref={imageRef}
                            className={`image-slide-in ${isVisible ? "visible" : ""}`}
                            id="imageFromFirstSection"
                        >
                            <Image src={imageFromFirstSection} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}