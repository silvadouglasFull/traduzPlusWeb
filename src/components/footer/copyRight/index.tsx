import { logoDSWeb } from "@constants/assets";
import { linkDSWeb } from "@constants/index";
import { appVersion } from "@flavor/index";
import { openPage } from "@utils/openPages";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const CopyRight: React.FC = () => {
    const handleOpenLink = () => {
        openPage(linkDSWeb)
    }
    return (
        <Row className="text-center">
            <Col className="col-12 mb-3">
                <Image
                    className="rounded-4"
                    style={{ width: 32, height: 32, cursor: 'pointer' }}
                    alt="logo da empresa ds web criada do layout do site"
                    src={logoDSWeb}
                    onClick={handleOpenLink}
                />
            </Col>
            <Col className="col-8">
                <Link to={'#'} className="text-light text-decoration-none mt-3">Politica de Privacidade</Link>
            </Col>
            <Col className="col-4">
                <Link to={'#'} className="text-light text-decoration-none mt-3">
                    <strong>Versão do site:</strong> {appVersion}
                </Link>
            </Col>
        </Row>
    )
}