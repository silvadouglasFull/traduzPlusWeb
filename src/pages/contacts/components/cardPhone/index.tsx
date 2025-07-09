import { Icon } from "@components/icons";
import type { Phones } from "@flavor/constants/contacts/types";
import { formatPhoneNumber } from "@utils/form/mask/phone";
import React from "react";
import { Card, Col } from "react-bootstrap";
export const CardTelephone: React.FC<Phones> = ({ number }: Phones) => {
    return (

        <Col className="text-center" sm={12} md={6}>
            <Card>
                <Card.Body>
                    <Icon name="fa-brands fa-whatsapp" />  {formatPhoneNumber(number, "pt")}
                </Card.Body>
            </Card>
        </Col>

    )
}