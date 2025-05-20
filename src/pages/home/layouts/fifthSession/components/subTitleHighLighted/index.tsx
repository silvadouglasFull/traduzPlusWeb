import type { TSubTitleHighLighted } from "@pagesHome/layouts/fifthSession/components/subTitleHighLighted/types";
import React from "react";

export const SubTitleHighLighted: React.FC<TSubTitleHighLighted & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({ text, hightLightedText }) => {
    return (
        <h3 className="text-uppercase font-weight-light">
            {text} <span className="font-weight-bold">{hightLightedText}</span>
        </h3>
    )
}