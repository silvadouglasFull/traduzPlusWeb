import React from "react";
import { NavDropdown } from "react-bootstrap";

export const Button: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    return (
        <NavDropdown title={<span className="text-light">🌐 Languages</span>} id="collapsible-nav-dropdown">
            {children}
        </NavDropdown>

    )
}