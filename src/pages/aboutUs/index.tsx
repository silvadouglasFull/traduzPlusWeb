import { Breadcrumbs } from "@components/bradCumps";
import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { FifthSession } from "@pages/layouts/fifthSession";
import { FirstSection } from "@pagesAboutUs/layouts/firstSection";
import type React from "react";

export const PageAboutUs: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Breadcrumbs backgroundImage={midia} />
            <FirstSection />
            <FifthSession />
        </>
    )
}