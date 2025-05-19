import type { ImageProps } from "@components/carrosel/item/image/types";
import React from "react";
export const Image: React.FC<ImageProps> = (imageProps) => {
    return (
        <img {...imageProps} />
    )
}