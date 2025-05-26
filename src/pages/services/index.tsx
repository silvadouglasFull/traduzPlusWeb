import { Breadcrumbs } from "@components/bradCumps";
import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { FirstSection } from "@pagesServices/layouts/firstSection";
import { SecoundSection } from "@pagesServices/layouts/secoundSection";
import React from "react";

export const PageServices: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Breadcrumbs backgroundImage={midia} />
            <FirstSection />
            <SecoundSection />
        </>
    )
}