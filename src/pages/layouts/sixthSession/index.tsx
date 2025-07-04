import { FormContactUs } from "@components/forms/contactUs";
import { useContactUs } from "@components/forms/contactUs/hooks/contactUs";
import { message } from "@components/forms/contactUs/modules/fetchMessage";
import { Toast } from "@components/toast";
import { useToast } from "@components/toast/hooks/useToast";
import { sections } from "@constants/index";
import { useLanguage } from "@context/language/hooks";
import { imageFromSixSetion } from "@flavor/constants/assets/home/sixthSession";
import { flavor } from "@flavor/index";
import { Image } from "@pages/components/image";
import { useChangeLanguage } from "@pages/layouts/sixthSession/hooks";
import { generateBodyPayload } from "@pages/layouts/sixthSession/utils/generateBodyPayload";
import '@pagesHome/styles/index.css';
import { scrollOnElenet } from "@utils/scrollPage/onElement";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
export const SixthSession: React.FC = () => {
    const { state } = useLocation()
    const { handleForm, state: valuesFromForm } = useContactUs()
    const { onClose, show, setMessage, setStatusCode, statusCode, message: messageResponse } = useToast()
    const { message: previewMessage } = useChangeLanguage()
    const [loading, setLoading] = useState<boolean>(false)
    const { language } = useLanguage()
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
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (valuesFromForm?.email) {
            setLoading(true)
            const response = await message.send({
                body: generateBodyPayload({ state: valuesFromForm, previewMessage }),
                subject: `${flavor}`,
                language,
                name: valuesFromForm.first_name ?? '',
                recipient_email: valuesFromForm.email
            })
            const { message: responseMessage, statusCode: responseStatusCode } = response
            setMessage(responseMessage)
            setStatusCode(responseStatusCode)
            setLoading(false)
        }
    };
    return (
        <section className="bg-gray-100" id={sections.home.contact}>
            <Toast message={messageResponse} onclose={onClose} show={show} statusCode={statusCode} />
            <Container fluid>
                <Row className='justify-content-between align-items-center'>
                    <Col md={12} lg={6}>
                        <FormContactUs loading={loading} onSubmit={onSubmit} />
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