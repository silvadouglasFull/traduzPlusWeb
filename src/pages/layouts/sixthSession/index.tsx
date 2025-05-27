import imageFromSixSetion from "@assets/greatNewSoluctions/images/contact-big-1-874x742.jpg";
import { FormContactUs } from "@components/forms/contactUs";
import { Image } from "@pages/components/image";
import '@pagesHome/styles/index.css';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export const SixthSession: React.FC = () => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <section className="bg-gray-100">
            <Container fluid>
                <Row className='justify-content-between align-items-center'>
                    <Col md={12} lg={6}>
                        <FormContactUs onSubmit={onSubmit} />
                    </Col>
                    <Col className="d-none d-md-block" md={12} lg={6}>
                        <Image style={{
                            width: '100vh',
                            height: '100vh',
                        }} src={imageFromSixSetion} direction="right" />
                    </Col>
                    <Col className="d-block d-md-none">
                        <Image style={{
                            width: '100%',
                            height: '100%',
                        }} src={imageFromSixSetion} direction="right" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}