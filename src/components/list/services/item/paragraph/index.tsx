import type { Description } from "@components/list/services/item/types";
import React from "react";
import { Card } from "react-bootstrap";
export const Paragraph: React.FC<Description> = ({ description }) => {
    return (
        <Card.Text>
            {description}
        </Card.Text>
    )
}