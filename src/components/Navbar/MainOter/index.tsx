import React from "react";
import { LanguageDropdown } from "../LanguageDropdown";
import { LinksHeader } from "../Links";
import { LogLink } from "../LogLink";
import type { MainOterProps } from "./types";
/**
 * Render a MainOter.
 * @returns {JSX.Element}
 */
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