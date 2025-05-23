import imageFromSixSetion from "@assets/traduzPlus/images/contact-big-1-874x742.jpg";
import { FormContactUs } from "@components/forms/contactUs";
import { useInView } from "@hooks/useInView";
import { Image } from "@pagesHome/components/image";
import '@pagesHome/styles/index.css';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export const SixthSession: React.FC = () => {
    const [imageRef, isVisible] = useInView<HTMLDivElement>();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // handle form submission here
    };

    return (
        <section className="bg-gray-100">
            <Container fluid>
                <Row className='justify-content-between align-items-center'>
                    <Col md={12} lg={6}>
                        <FormContactUs onSubmit={onSubmit} />
                    </Col>
                    <Col md={12} lg={6}>
                        <div
                            ref={imageRef}
                            className={`image-slide-in ${isVisible ? "visible" : ""}`}
                            id="imageFromSixSetion"
                        >
                            <Image style={{
                                width: '100vh',
                                height: '100vh',
                            }} src={imageFromSixSetion} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}