import { LanguageDropdown } from "@navbarPublic/LanguageDropdown";
import { LinksHeader } from "@navbarPublic/Links";
import { LogLink } from "@navbarPublic/LogLink";
import type { MainOterProps } from "@navbarPublic/MainOter/types";
import React from "react";

export const MainOter: React.FC<MainOterProps> = ({ toggleMenu, isMenuOpen }) => {
    return (
        <div className="rd-navbar-main-outer">
            <div className="rd-navbar-main">
                <div className="rd-navbar-panel">
                    <button
                        className="rd-navbar-toggle toggle-original"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                    </button>
                    <LogLink urlLogo="" />
                </div>
                <div className="rd-navbar-main-element">
                    <div
                        className={`rd-navbar-nav-wrap toggle-original-elements ${isMenuOpen ? 'open' : ''}`}
                    >
                        <LinksHeader items={[]} />
                    </div>

                    <div className="rd-navbar-search toggle-original-elements" id="rd-navbar-search-1">
                        <LanguageDropdown />
                    </div>
                </div>
            </div>
        </div>
    )
}