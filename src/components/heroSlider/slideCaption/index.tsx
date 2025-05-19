import { Button } from "@components/heroSlider/slideCaption/button";
import React from "react";
import type { SlideCaptionProps } from "./types";
export const SlideCaption: React.FC<SlideCaptionProps> = ({ buttonText, subtitle, title }) => {
    return (
        <>
            {`${title}`}
            {`${title}`}
            {`${subtitle}`}
            <Button buttonText={buttonText} href="#" />
        </>
    )
}
