import type { ImageProps } from "@pagesHome/components/image/types";
import type React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Image: React.FC<ImageProps> = ({ src, style, className, ...imageProps }: ImageProps) => {
    return (
        <LazyLoadImage
            className={`img-responsive rouded-5 ${className ? className : ''}`}
            src={src}
            style={style ? style : {
                width: '100%',
                height: '100%'
            }}
            {...imageProps}
            effect="blur"
            delayMethod="throttle"
        />
    )
}