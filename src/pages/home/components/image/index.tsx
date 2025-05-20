import type { ImageProps } from "@pagesHome/components/image/types";
import type React from "react";
import { Image as ReactBootstrapImage } from "react-bootstrap";
export const Image: React.FC<ImageProps> = (imageProps: ImageProps) => {
    return (
        <ReactBootstrapImage className="img-responsive" {...imageProps} style={{
            ...imageProps?.style,
            width: '100%',
            height: '100%'
        }} fluid />
    )
}