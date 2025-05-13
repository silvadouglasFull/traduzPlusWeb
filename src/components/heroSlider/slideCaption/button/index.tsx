import type { ButtonText, Page } from "@components/heroSlider/slideCaption/button/types";
import React from "react";
export const Button: React.FC<ButtonText & Page> = ({ buttonText, href }) => {
    return (
        <a
            href={href}
            className="button button-secondary button-winona"
        >
            <div className="content-original">{buttonText}</div>
            <div className="content-dubbed">{buttonText}</div>
        </a>
    )
}