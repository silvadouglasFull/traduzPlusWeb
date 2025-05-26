import type { Phones } from "@flavor/constants/contacts/types";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import React from "react";
import { Card, Col } from "react-bootstrap";
export const CardTelephone: React.FC<Phones> = ({ number }: Phones) => {
    return (

        <Col className="text-center" sm={12} md={6}>
            <Card className="border border-top-0 border-left-0 border-right-0">
                <Card.Body>
                    {formatPhoneNumber(number, "br")}
                </Card.Body>
            </Card>
        </Col>

    )
}