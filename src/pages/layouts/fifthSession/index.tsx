import { SubTitleHighLighted } from '@pages/layouts/fifthSession/components/subTitleHighLighted';
import { useSetTextButton } from '@pages/layouts/fifthSession/hooks';
import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
export const FifthSession: React.FC = () => {
    const { text } = useSetTextButton()
    return (
        <section className="p-3 text-center mb-3 bg-dark">
            <Container className='p-5'>
                <Row className='d-flex justify-content-center align-items-center flex-wrap'>
                    <Col>
                        <SubTitleHighLighted text='Professional' hightLightedText='Translation services' />
                    </Col>
                    <Col>
                        <Button className='text-uppercase mt-3' size='lg'>
                            {text}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}