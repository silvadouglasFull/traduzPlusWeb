import imageFromSixSetion from "@assets/greatNewSoluctions/images/contact-big-1-874x742.jpg";
import { FormContactUs } from "@components/forms/contactUs";
import { useContactUs } from "@components/forms/contactUs/hooks/contactUs";
import { message } from "@components/forms/contactUs/modules/fetchMessage";
import { sections } from "@constants/index";
import { Image } from "@pages/components/image";
import '@pagesHome/styles/index.css';
import { scrollOnElenet } from "@utils/scrollPage/onElement";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export const SixthSession: React.FC = () => {
    const { state } = useLocation()
    const { handleForm, state: valuesFromForm } = useContactUs()
    useEffect(() => {
        const handleScrollPage = () => {
            if (state?.focusId && state?.message) {
                handleForm({
                    message: state.message
                })
                scrollOnElenet(state.focusId)
            }
        }
        handleScrollPage()
    }, [state])
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        message.send({
            ...valuesFromForm
        })
    };

    return (
        <section className="bg-gray-100" id={sections.home.contact}>
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