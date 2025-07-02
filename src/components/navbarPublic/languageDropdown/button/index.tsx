import { Title } from "@components/navbarPublic/languageDropdown/button/title";
import React from "react";
import { NavDropdown } from "react-bootstrap";

export const Button: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <NavDropdown title={<Title />} id="collapsible-nav-dropdown">
            {children}
        </NavDropdown>
    )
}