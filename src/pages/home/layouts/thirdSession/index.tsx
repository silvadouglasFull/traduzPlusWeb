import imageFromThirSection from "@assets/traduzPlus/images/image-aside-01-1143x584.webp";
import { paragraphs } from "@flavor/constants/texts/home/thirdSection";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import { SubTitle } from "@pages/components/subTitle";
import { useChangeLanguage } from "@pages/home/layouts/hooks/useChangeLanguage";
import { ParagraphLight } from "@pages/home/layouts/thirdSession/components";
import { styles } from "@pagesHome/layouts/thirdSession/styles";
import type React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ThirdSession: React.FC = () => {
    const { items } = useChangeLanguage(paragraphs)
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
                        <Paragraph items={items} />
                        <Button variant="oxford" className="w-100 text-uppercase" size="lg">
                            <Link to={'/services'} className="text-decoration-none text-light">
                                BROWSER OUR SERVICES
                            </Link>
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
                    <Paragraph items={items} />
                    <Button variant="oxford" className="w-100 text-uppercase" size="lg">
                        <Link to={'/services'} className="text-decoration-none text-light">
                            BROWSER OUR SERVICES
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    )
}