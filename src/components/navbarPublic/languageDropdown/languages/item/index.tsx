import type { LanguageItemProps } from "@components/navbarPublic/languageDropdown/languages/item/types";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item: React.FC<LanguageItemProps> = ({
    icon,
    isActive,
    label,
    onClick
}) => {
    return (
        <NavDropdown.Item to={'#'} onClick={onClick} as={Link} active={isActive}>
            {icon ? icon : null} {label}
        </NavDropdown.Item>
    )
} 