import { sections } from '@constants/index';
import { useSubTitleHighLighted } from '@hooks/useChangeLanguage/useSubTitleHighLighted';
import { SubTitleHighLighted } from '@pages/layouts/fifthSection/components/subTitleHighLighted';
import { useSetTextButton } from '@pages/layouts/fifthSection/hooks/useSetTextButton';
import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export const FifthSession: React.FC = () => {
    const { text } = useSetTextButton()
    const { hightLightedText, text: title } = useSubTitleHighLighted()
    return (
        <section className="p-3 text-center mb-3 bg-dark" id={sections.home.flashyBanner}>
            <Container className='p-5'>
                <Row className='d-flex justify-content-center align-items-center flex-wrap'>
                    <Col>
                        <SubTitleHighLighted text={title} hightLightedText={hightLightedText} />
                    </Col>
                    <Col>
                        <Button className='text-uppercase mt-3' variant='secondary' size='lg'>
                            <Link to={'/contact'} className='text-decoration-none text-light'>
                                {text}
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}