import type { ParagraphLightProps } from "@pagesHome/layouts/thirdSession/components/paragraphLight/types";
import React from "react";
export const ParagraphLight: React.FC<ParagraphLightProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = ({ text, ...rest }) => {
    return (
        <h5 {...rest} className="text-uppercase font-weight-light">
            {text}
        </h5>
    )
}