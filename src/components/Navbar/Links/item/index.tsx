import React from "react";
import type { LinkItem } from "./types";
const Item: React.FC<LinkItem> = ({ title, url, icon, isActive }) => {
    return (
        <li className={`rd-nav-item ${isActive ? 'active' : ''}`}>
            <a className="rd-nav-link" href={url}>
                {icon && <i className={icon}></i>}
                {title}
            </a>
        </li>
    )
}
export { Item };

