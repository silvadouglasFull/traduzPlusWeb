import type { Item as TItem } from "@components/footer/links/quickLinks/socialMedia/item/types";
import { Icon } from "@components/icons";
import { openPage } from "@utils/openPages";
import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const Item: React.FC<TItem> = ({ icon, title, url }) => {
    const handleOpenPage = () => {
        openPage(url)
    }
    return (
        <Col>
            <Link className="text-light text-decoration-none" onClick={handleOpenPage} to={'#'}>
                {icon ? <Icon name={icon} /> : null}  {title}
            </Link>
        </Col>
    )
}