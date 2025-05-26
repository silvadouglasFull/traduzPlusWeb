import { AnimationSlide } from "@components/animationSlide/slideLeftRight";
import type { AnimationSlideProps } from "@components/animationSlide/slideLeftRight/types";
import type { ImageProps } from "@pagesHome/components/image/types";

import type React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Image: React.FC<ImageProps & AnimationSlideProps> = ({ src, style, className, direction = 'left', ...imageProps }: ImageProps & AnimationSlideProps) => {

    return (
        <AnimationSlide direction={direction}>
            <LazyLoadImage
                className={`img-responsive rouded-5 ${className ? className : ''}`}
                src={src}
                style={style ?? { width: '100%', height: '100%' }}
                {...imageProps}
                effect="blur"
                delayMethod="throttle"
            />
        </AnimationSlide>
    )
}