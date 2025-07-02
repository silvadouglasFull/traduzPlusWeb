import type { Items } from "@components/navbarPublic/languageDropdown/languages/item/types";
import { useLanguage } from "@context/language/hooks";
import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Item: React.FC<Items> = ({
    icon,
    label,
    language,
}) => {
    const { setLanguage, language: languageContext, setIcon } = useLanguage()
    const onClick = () => {
        setLanguage(language)
        setIcon(icon)
    }
    return (
        <NavDropdown.Item to={'#'} onClick={onClick} as={Link} active={languageContext === language}>
            {icon ? icon : null} {label}
        </NavDropdown.Item>
    )
} 