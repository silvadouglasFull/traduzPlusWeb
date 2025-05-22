import { CopyRight } from "@components/footer/copyRight"
import { ContactInformation } from "@components/footer/links/contactInformation"
import { QuickLinks } from "@components/footer/links/quickLinks"
import { contacts } from "@flavor/constants/contacts"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-gradient mt-3">
            <Container className="p-3">
                <Row className="justify-content-between align-items-center align-self-stretch flex-wrap">
                    <Col sm={12}>
                        <QuickLinks />
                    </Col>
                    <Col>
                        <ContactInformation {...contacts} />
                    </Col>
                </Row>
                <Col className="text-center w-100">
                    <CopyRight />
                </Col>
            </Container>
        </footer>
    )
}