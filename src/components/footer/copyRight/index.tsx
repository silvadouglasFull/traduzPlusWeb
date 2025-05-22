import { logoDSWeb } from "@constants/assets";
import { linkDSWeb } from "@constants/index";
import { openPage } from "@utils/openPages";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export const CopyRight: React.FC = () => {
    const handleOpenLink = () => {
        openPage(linkDSWeb)
    }
    return (
        <Row>
            <Col className="col-12">
                <Image
                    className="rounded-4"
                    style={{ width: 32, height: 32, cursor: 'pointer' }}
                    alt="logo da empresa ds web criada do layout do site"
                    src={logoDSWeb}
                    onClick={handleOpenLink}
                />
            </Col>
            <Col>
                <Link to={'#'} className="text-light">Politica de Privacidade</Link>
            </Col>
        </Row>
    )
}