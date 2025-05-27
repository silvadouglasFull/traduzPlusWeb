import type { Description } from "@pages/home/layouts/secoundSection/components/services/item/types";
import React from "react";
import { Card } from "react-bootstrap";
export const Paragraph: React.FC<Description> = ({ description }) => {
    return (
        <Card.Text className="text-secondary">
            {description}
        </Card.Text>
    )
}