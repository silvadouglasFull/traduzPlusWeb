import React from "react";
import type { LanguageItemProps } from "./types";
export const Item: React.FC<LanguageItemProps> = ({
    icon,
    isActive,
    label,
    onClick
}) => {
    return (
        <li>
            <a
                className={`dropdown-item ${isActive ? 'active' : ''}`}
                href="#"
                onClick={onClick}
            >
                {icon ?? ''} {label}
            </a>
        </li>
    )
} 