import { Item } from "@components/navbarPublic/links/item";
import type { LinksProps } from "@components/navbarPublic/links/types";
import React from "react";

export const LinksHeader: React.FC<LinksProps> = ({ items }) => {
    return (
        <>
            {items.length ? items.map(item => <Item key={item.id} {...item} />) : null}
        </>
    )
}