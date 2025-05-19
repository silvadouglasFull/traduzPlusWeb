import type { LinkItem } from "@components/navbarPublic/links/item/types";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item: React.FC<LinkItem> = ({ title, url, icon, isActive }) => {
    return (
        <Link to={url}>
            <Nav.Link href="#" active={isActive}>
                {icon ? icon : null} {title}
            </Nav.Link>
        </Link>
    )
}
export { Item };

