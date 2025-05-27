import type { TSubTitleHighLighted } from "@pages/layouts/fifthSection/components/subTitleHighLighted/types";
import React from "react";

export const SubTitleHighLighted: React.FC<TSubTitleHighLighted & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>> = ({ text, hightLightedText }) => {
    return (
        <h3 className="text-uppercase font-weight-light">
            {text} <span className="font-weight-bold">{hightLightedText}</span>
        </h3>
    )
}