import { Item } from "@navbarPublic/Links/item";
import type { LinksProps } from "@navbarPublic/Links/types";
import React from "react";

export const LinksHeader: React.FC<LinksProps> = ({ items }) => {
    return (
        <ul className="rd-navbar-nav">
            {items.length ? items.map(item => <Item key={item.id} {...item} />) : null}
        </ul>
    )
}