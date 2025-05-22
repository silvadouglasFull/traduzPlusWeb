import type { Item as TItem } from "@components/footer/links/quickLinks/pages/item/types";
import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Item: React.FC<TItem> = ({ title, url }) => {
    return (
        <Col>
            <Link className="text-light" to={url}>{title}</Link>
        </Col>
    )
}