import { largeFeatures, singleServices } from "@flavor/constants/assets/services/secoundSection";
import { paragraphs } from "@flavor/constants/texts/services/secoundSection";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import { SubTitle } from "@pages/components/subTitle";
import { styles } from "@pages/home/styles";
import type React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
export const SecoundSection: React.FC = () => {
    return (
        <section className="mb-3 p-3">
            <Container style={styles.container}>
                <Row className="justify-content-center align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <SubTitle text="About This Service" />
                        <Paragraph items={paragraphs.slice(0, 2)} />
                        <Button variant="oxford" className="w-100 mb-5 text-uppercase" size="lg">
                            Learn More
                        </Button>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12}>
                        <Image src={singleServices} />
                    </Col>
                </Row>
            </Container>
            <Container style={styles.container} className="d-none d-md-block">
                <Row className="justify-content-center align-items-center">
                    <Col md={12} lg={6} xxl={7} sm={12}>
                        <Image src={largeFeatures} />
                    </Col>
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <SubTitle text="Educational" />
                        <Paragraph items={paragraphs.slice(3, paragraphs.length)} />
                        <Button variant="oxford" className="w-100 mb-5 text-uppercase" size="lg">
                            Learn More
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container style={styles.container} className="d-block d-md-none">
                <Row className="justify-content-center align-items-center">
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12}>
                        <SubTitle text="Educational" />
                        <Paragraph items={paragraphs.slice(3, paragraphs.length)} />
                        <Button variant="oxford" className="w-100 mb-5 text-uppercase" size="lg">
                            Learn More
                        </Button>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12}>
                        <Image src={largeFeatures} direction="right" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}