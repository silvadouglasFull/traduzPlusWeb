import { Item } from "@components/footer/links/quickLinks/socialMedia/item";
import type { SocialMidiaItems } from "@components/footer/links/quickLinks/socialMedia/types";
import React from "react";
import { Row } from "react-bootstrap";
export const SocialMedia: React.FC<SocialMidiaItems> = ({ items, ...props }) => {
    return (
        <Row {...props} className="mb-3">
            {items.length ? items.filter(item => item.url).map(item => (<Item key={item.id} {...item} />)) : null}
        </Row>
    )
}