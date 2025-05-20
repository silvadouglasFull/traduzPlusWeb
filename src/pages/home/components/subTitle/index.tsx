import type { SubTitleProps } from "@pagesHome/components/subTitle/types";
import type React from "react";
export const SubTitle: React.FC<SubTitleProps> = (subtitleProps: SubTitleProps) => {
    return (
        <h2 {...subtitleProps} className="text-uppercase font-weight-bold">{subtitleProps.text}</h2>
    )
}