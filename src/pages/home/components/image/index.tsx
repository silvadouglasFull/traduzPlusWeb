import { useOnLoadImage } from "@hooks/useOnLoadImage";
import type { ImageProps } from "@pagesHome/components/image/types";
import type React from "react";
import { Card, Placeholder, Image as ReactBootstrapImage } from "react-bootstrap";
export const Image: React.FC<ImageProps> = ({ src, style, ...imageProps }: ImageProps) => {
    const { loading, onLoad } = useOnLoadImage()
    if (loading) {
        return (
            <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={12} />
            </Placeholder>
        )
    }
    return (
        <ReactBootstrapImage onLoad={onLoad} className="img-responsive rouded-5" src={src} {...imageProps} style={{
            ...style,
            width: '100%',
            height: '100%'
        }} fluid />
    )
}