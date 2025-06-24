import { useNavbarBackground } from "@components/navbarPublic/hooks/useNavbarBackground";
import { useLanguage } from "@context/language/hooks";
import React from "react";
import { NavDropdown } from "react-bootstrap";

export const Button: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const { icon } = useLanguage()
    const { hasBackground } = useNavbarBackground()

    return (
        <>
            <NavDropdown className="d-block d-md-none" title={<span className="text-light">{icon} Languages</span>} id="collapsible-nav-dropdown">
                {children}
            </NavDropdown>
            <NavDropdown className="d-none d-md-block" title={<span className={`text-${hasBackground ? 'dark' : 'light'}`}>{icon} Languages</span>} id="collapsible-nav-dropdown">
                {children}
            </NavDropdown>
        </>
    )
}