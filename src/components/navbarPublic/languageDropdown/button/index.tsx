import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import React from "react";
import { NavDropdown } from "react-bootstrap";

export const Button: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const { hasBackground } = useNavbarBackground()
    return (
        <NavDropdown title={`🌐 Languages`} className={`${hasBackground ? 'text-dark' : 'text-light'}`} id="collapsible-nav-dropdown">
            {children}
        </NavDropdown>

    )
}