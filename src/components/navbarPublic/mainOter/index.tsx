import logo from "@assets/images/logo-inverse-246x44.png";
import { LanguageDropdown } from "@components/navbarPublic/languageDropdown";
import { LinksHeader } from "@components/navbarPublic/links";
import { LogLink } from "@components/navbarPublic/logLink";
import type { MainOterProps } from "@components/navbarPublic/mainOter/types";
import { links } from "@utils/linksHeader";
import React from "react";

export const MainOter: React.FC<MainOterProps> = ({ toggleMenu, isMenuOpen }) => {
    return (
        <>
            <button onClick={toggleMenu}>
                {isMenuOpen ? 'Open' : 'Closed'}
            </button>
            <LogLink urlLogo={logo} />
            <LinksHeader items={links} />
            <LanguageDropdown />
        </>
    )
}