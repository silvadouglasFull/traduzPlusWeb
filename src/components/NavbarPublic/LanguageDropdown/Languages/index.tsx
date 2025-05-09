import { Item } from "@navbarPublic/LanguageDropdown/Languages/item";
import React from "react";
import type { LanguagesProps } from "./types";
export const Lenguages: React.FC<LanguagesProps> = ({ items }) => {
    return (
        <ul className="dropdown-menu show dropdown-menu-end" aria-labelledby="languageDropdown">
            {items.length ? items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </ul>
    )
}