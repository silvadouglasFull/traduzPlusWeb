import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import type { LanguageItemProps } from "./types";
export const Item: React.FC<LanguageItemProps> = ({
    icon,
    isActive,
    label,
    onClick
}) => {
    return (
        <Link to={'#'} onClick={onClick}>
            <NavDropdown.Item href="#" active={isActive}>
                {icon ? icon : null} {label}
            </NavDropdown.Item>
        </Link>
    )
} 