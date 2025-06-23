import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import type { LinkItem } from "@components/navbarPublic/links/item/types";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item: React.FC<LinkItem> = ({ title, url, icon, isActive }) => {
    const { hasBackground } = useNavbarBackground()

    return (
        <>
            <Nav.Link as={Link} className={`d-none d-md-block text-${hasBackground ? 'dark' : 'light'} me-5`} to={url} active={isActive}>
                {icon ? icon : null} {title}
            </Nav.Link>
            <Nav.Link as={Link} className={`d-block d-md-none text-dark me-5`} to={url} active={isActive}>
                {icon ? icon : null} {title}
            </Nav.Link>
        </>
    )
}
export { Item };

