import { VITE_CLOUD_FLARE } from "@config/index";
import React from "react";
export const imageFromThirSection = `${VITE_CLOUD_FLARE}/greatNewSoluctions/images/image-aside-01-1143x584.webp`;

export const styles: React.CSSProperties = {
    backgroundImage: `url('${imageFromThirSection}')`,
    backgroundSize: '66% 100%',
    backgroundPosition: 'left center', // ou 'center center'
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100%',
}