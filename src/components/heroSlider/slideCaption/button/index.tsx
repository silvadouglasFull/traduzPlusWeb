import type { ButtonText, Page } from "@components/heroSlider/slideCaption/button/types";
import React from "react";
export const Button: React.FC<ButtonText & Page> = ({ buttonText, href }) => {
    return (
        <a
            href={href}
        >
            <div>{buttonText}</div>
            <div>{buttonText}</div>
        </a>
    )
}