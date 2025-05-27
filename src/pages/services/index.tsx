import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { FallBack } from "@components/fallback";
import { FirstSection } from "@pagesServices/layouts/firstSection";
import { SecoundSection } from "@pagesServices/layouts/secoundSection";
import React, { lazy, Suspense } from "react";

const Breadcrumbs = lazy(() => import('@components/bradCumps').then(({ Breadcrumbs }) => ({ default: Breadcrumbs })))

export const PageServices: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Suspense fallback={<FallBack />}>
                <Breadcrumbs backgroundImage={midia} />
            </Suspense>
            <FirstSection />
            <SecoundSection />
        </>
    )
}