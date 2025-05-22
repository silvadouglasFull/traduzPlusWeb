import type { TTitleSectionLink } from "@components/footer/links/titleSectionLink/types";
import React from "react";
export const TitleSectionLink: React.FC<TTitleSectionLink> = ({ title, ...props }) => {
    return (
        <h5 {...props} className="text-uppercase font-weight-bold mb-3">
            {title}
        </h5>
    )
}