import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { useLanguage } from "@context/language/hooks";
import React from "react";
import { NavDropdown } from "react-bootstrap";

export const Button: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const { icon } = useLanguage()
    const { hasBackground } = useNavbarBackground()

    return (
        <NavDropdown title={<span className={`text-${hasBackground ? 'dark' : 'light'}`}>{icon} Languages</span>} id="collapsible-nav-dropdown">
            {children}
        </NavDropdown>

    )
}