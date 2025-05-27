import { CopyRight } from "@components/footer/copyRight"
import { ContactInformation } from "@components/footer/links/contactInformation"
import { QuickLinks } from "@components/footer/links/quickLinks"
import { sections } from "@constants/index"
import { contacts } from "@flavor/constants/contacts"
import React from "react"
import { Col, Container, Row } from "react-bootstrap"
export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-gradient mt-3" id={sections.footer.links}>
            <Container className="p-3">
                <Row>
                    <Col sm={12} md={6}>
                        <QuickLinks />
                    </Col>
                    <Col sm={12} md={6}>
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