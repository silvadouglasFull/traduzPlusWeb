import type { LinkItem } from "@components/navbarPublic/links/item/types";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item: React.FC<LinkItem> = ({ title, url, icon, isActive }) => {
    return (
        <Nav.Link as={Link} className='text-light me-5' to={url} active={isActive}>
            {icon ? icon : null} {title}
        </Nav.Link>
    )
}
export { Item };

