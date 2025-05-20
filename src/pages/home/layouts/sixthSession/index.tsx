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
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={8} xl={6}>
                        <FormContactUs onSubmit={onSubmit} />
                    </Col>
                    <Col lg={8} xl={6}>
                        <div
                            ref={imageRef}
                            className={`image-slide-in ${isVisible ? "visible" : ""}`}
                            id="imageFromSixSetion"
                        >
                            <Image src={imageFromSixSetion} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}