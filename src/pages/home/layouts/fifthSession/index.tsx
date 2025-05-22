import { SubTitleHighLighted } from '@pagesHome/layouts/fifthSession/components/subTitleHighLighted';
import { styles } from "@pagesHome/styles";
import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
export const FifthSession: React.FC = () => {
    return (
        <section className="p-3 text-center mb-3" style={styles.bgPrimaryGradient}>
            <Container className='p-5'>
                <Row className='d-flex justify-content-center align-items-center flex-wrap'>
                    <Col>
                        <SubTitleHighLighted text='Professional' hightLightedText='Translation services' />
                    </Col>
                    <Col>
                        <Button className='text-uppercase mt-3' size='lg'>
                            order now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}