import React from "react";
import { Item } from "./item";
import type { LinksProps } from "./types";
/**
 * Render a list using React component.
 * @returns {JSX.Element}
 */
export const LinksHeader: React.FC<LinksProps> = ({ items }) => {
    return (
        <ul className="rd-navbar-nav">
            {items.length ? items.map(item => <Item key={item.id} {...item} />) : null}
        </ul>
    )
}