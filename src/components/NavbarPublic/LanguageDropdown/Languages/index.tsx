import { Item } from "@navbarPublic/LanguageDropdown/Languages/item";
import type { LanguagesProps } from "@navbarPublic/LanguageDropdown/Languages/types";
import React from "react";
export const Lenguages: React.FC<LanguagesProps> = ({ items }) => {
    return (
        <ul className="dropdown-menu show dropdown-menu-end" aria-labelledby="languageDropdown">
            {items.length ? items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </ul>
    )
}