import { linkDSWeb } from "@constants/index";
import { appVersion } from "@flavor/index";
import { openPage } from "@utils/openPages";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const CopyRight: React.FC = () => {
    const handleOpenLink = () => {
        openPage(linkDSWeb)
    }
    return (
        <Row>
            <Col className="mb-3">
                <Row className="d-flex justify-content-center align-items-center flex-nowrap">
                    <Link to={'#'} onClick={handleOpenLink} className="text-light text-decoration-none">
                        <small>Desenvolvido por DS Web</small>
                    </Link>
                </Row>
            </Col>
            <Col>
                <Link to={'#'} className="text-light text-decoration-none mt-3">
                    <small>v{appVersion}</small>
                </Link>
            </Col>
            <Col>
                <Link to={'#'} className="text-light text-decoration-none mt-3">Politica de Privacidade</Link>
            </Col>
        </Row>
    )
}