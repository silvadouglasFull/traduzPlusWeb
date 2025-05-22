import type { TPages } from "@components/footer/links/quickLinks/pages/types";
import React from "react";
import { Row } from "react-bootstrap";
import { Item } from "./item";
export const Pages: React.FC<TPages> = ({ items, ...props }) => {
    return (
        <Row {...props} className="mb-3">
            {items.length ? items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </Row>
    )
}