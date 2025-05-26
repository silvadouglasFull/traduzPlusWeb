import { Breadcrumbs } from "@components/bradCumps";
import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { FirstSection } from "@pagesAboutUs/layouts/firstSection";
import type React from "react";

export const PageContact: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Breadcrumbs backgroundImage={midia} />
            <FirstSection />
        </>
    )
}