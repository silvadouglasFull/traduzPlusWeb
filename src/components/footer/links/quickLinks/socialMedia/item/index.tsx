import type { Item as TItem } from "@components/footer/links/quickLinks/socialMedia/item/types";
import { openPage } from "@utils/openPages";
import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Item: React.FC<TItem> = ({ title, url }) => {
    const handleOpenPage = () => {
        openPage(url)
    }
    return (
        <Col>
            <Link className="text-light" onClick={handleOpenPage} to={'#'}>
                {title}
            </Link>
        </Col>
    )
}