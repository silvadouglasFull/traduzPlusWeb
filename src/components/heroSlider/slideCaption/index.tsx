import { Button } from "@components/heroSlider/slideCaption/button";
import React from "react";
import type { SlideCaptionProps } from "./types";
export const SlideCaption: React.FC<SlideCaptionProps> = ({ buttonText, subtitle, title }) => {
    return (
        <div className="swiper-slide-caption">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-xl-7">
                        <div className="heading-decorate-wrap">
                            <h1 className="heading-decorate text-large">
                                <span className="heading-decorate-symbol font-weight-ubold">
                                    {`${title}`}
                                </span>
                                <span className="heading-decorate-main">
                                    <span className="font-weight-ubold">
                                        {`${title}`}
                                    </span>{' '}
                                    <span className="font-weight-light">
                                        {`${subtitle}`}
                                    </span>
                                </span>
                            </h1>
                            <Button buttonText={buttonText} href="#" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
