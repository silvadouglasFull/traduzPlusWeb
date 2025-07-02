import { Item } from "@components/navbarPublic/languageDropdown/languages/item";
import type { LanguagesProps } from "@components/navbarPublic/languageDropdown/languages/types";
import React from "react";
export const Lenguages: React.FC<LanguagesProps> = ({ items }) => {
    return (
        <>
            {items.length ? items.map(item => (
                <Item {...item} key={item.id} />
            )) : null}
        </>
    )
}