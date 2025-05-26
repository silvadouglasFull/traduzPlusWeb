import breadcrumbs from "@assets/traduzPlus/images/breadcrumbs-image-1.jpg";
import { Breadcrumbs } from "@components/bradCumps";
import type React from "react";
export const PageAboutUs: React.FC = () => {
    return (
        <>
            <Breadcrumbs backgroundImage={breadcrumbs} />
        </>
    )
}