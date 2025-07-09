import { contacts } from "@flavor/constants/contacts";
import { CardTelephone } from "@pages/contacts/components/cardPhone";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
export const FirstSection: React.FC = () => {
    return (
        <section className="mb-3 mt-3">
            <Container>
                <Row className="mt-5 justify-content-center align-items-center">
                    {contacts.phones.map(item => (
                        <CardTelephone key={item.key} number={item.number} />
                    ))}
                    <Col sm={12} md={6} className="text-center">
                        <Card className="border border-top-0 border-left-0 border-right-0">
                            <Card.Body>
                                {contacts.email}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} className="text-center">
                        <Card className="border border-top-0 border-left-0 border-right-0">
                            <Card.Body>
                                {contacts.address}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}