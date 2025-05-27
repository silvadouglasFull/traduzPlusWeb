import { Item } from "@components/navbarPublic/links/item";
import type { LinksProps } from "@components/navbarPublic/links/types";
import { useScrollPage } from "@hooks/useScrollPage";
import React from "react";

export const LinksHeader: React.FC<LinksProps> = ({ items }) => {
    const { pathname } = useScrollPage()
    return (
        <>
            {items.length ? items.map(item => <Item key={item.id} isActive={(pathname === item.url)} {...item} />) : null}
        </>
    )
}