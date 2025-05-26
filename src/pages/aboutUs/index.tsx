import { Breadcrumbs } from "@components/bradCumps";
import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import type React from "react";
export const PageAboutUs: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Breadcrumbs backgroundImage={midia} />
        </>
    )
}