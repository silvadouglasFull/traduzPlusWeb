import imageFromThirSection from "@assets/traduzPlus/images/image-aside-01-1143x584.webp";
import { paragraphs } from "@flavor/constants/texts/thirdSection";
import { SubTitle } from "@pages/components/subTitle";
import { Paragraph } from "@pages/home/components/paragraph";
import { ParagraphLight } from "@pages/home/layouts/thirdSession/components";
import { Image } from "@pagesHome/components/image";
import { styles } from "@pagesHome/layouts/thirdSession/styles";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const ThirdSession: React.FC = () => {
    return (
        <section className="p-3 mb-3">
            <Container className="d-block d-lg-none">
                <Row className='row justify-content-center'>
                    <Col md={12} lg={1} sm={12} className="mb-3">
                        <Image src={imageFromThirSection} />
                    </Col>
                    <Col md={12} lg={11} sm={12}>
                        <ParagraphLight style={{
                            fontSize: '1.125rem'
                        }} text="providing quality Translation since 1999" />
                        <SubTitle text="Great Industry Expertise" applyShadown={false} />
                        <Paragraph items={paragraphs} />
                        <Button variant="oxford" className="w-100" size="lg">
                            BROWSER OUR SERVICES
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container style={styles} className="d-none d-lg-flex justify-content-end">
                <div className="w-50 p-5">
                    <ParagraphLight style={{
                        fontSize: '.875rem'
                    }} text="providing quality Translation since 1999" />
                    <SubTitle text="Great Industry Expertise" applyShadown={false} />
                    <Paragraph items={paragraphs} />
                    <Button variant="oxford" className="w-100" size="lg">
                        BROWSER OUR SERVICES
                    </Button>
                </div>
            </Container>
        </section>
    )
}