import type { TitleProps } from "@components/bradCumps/title/types";
import { transformerInFirstWord } from "@utils/transfomerText";
import React from "react";
export const Title: React.FC<TitleProps> = ({ title, ...props }) => {
    return (
        <>
            <h6 {...props} className="breadcrumbs-custom-subtitle title-decorated">{title}</h6>
            <h1 className="heading-decorate heading-decorate-lg breadcrumbs-custom-title">
                <span
                    className="heading-decorate-symbol font-weight-bold">
                    {transformerInFirstWord({ world: title })}
                </span>
                <span className="heading-decorate-main">{title}</span>
            </h1>
        </>
    )
}