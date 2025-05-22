import imageFromThirSection from "@assets/traduzPlus/images/image-aside-01-1143x584.webp";
import { paragraphs } from "@flavor/constants/texts/thirdSection";
import { useInView } from "@hooks/useInView";
import { Paragraph } from "@pages/home/components/paragraph";
import { ParagraphLight } from "@pages/home/layouts/thirdSession/components";
import { Image } from "@pagesHome/components/image";
import { SubTitle } from "@pagesHome/components/subTitle";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { styles } from "./styles";

export const ThirdSession: React.FC = () => {
    const [imageRef, isVisible] = useInView<HTMLDivElement>();
    return (
        <section className="p-3 mb-3">
            <Container className="d-block d-md-none">
                <Row className='row section-indie-row justify-content-center justify-content-lg-end'>
                    <Col md={12} lg={1} sm={12} className="mb-3">
                        <div
                            ref={imageRef}
                            className={`image-slide-in ${isVisible ? "visible" : ""}`}
                            id="imageFromThirSection"
                        >
                            <Image src={imageFromThirSection} />
                        </div>
                    </Col>
                    <Col md={12} lg={11} sm={12}>
                        <ParagraphLight style={{
                            fontSize: '.875rem'
                        }} text="providing quality Translation since 1999" />
                        <SubTitle text="Great Industry Expertise" />
                        <Paragraph items={paragraphs} />
                        <Button variant="primary" className="w-100" size="lg">
                            BROWSER OUR SERVICES
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container style={styles} className="d-none d-md-flex justify-content-end">
                <div className="w-50 p-3">
                    <ParagraphLight style={{
                        fontSize: '.875rem'
                    }} text="providing quality Translation since 1999" />
                    <SubTitle text="Great Industry Expertise" />
                    <Paragraph items={paragraphs} />
                    <Button variant="primary" className="w-100" size="lg">
                        BROWSER OUR SERVICES
                    </Button>

                </div>
            </Container>
        </section>
    )
}