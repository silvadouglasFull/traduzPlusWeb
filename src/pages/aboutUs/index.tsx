import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { FallBack } from "@components/fallback";
import { FifthSession } from "@pages/layouts/fifthSection";
import { FirstSection } from "@pagesAboutUs/layouts/firstSection";
import React, { lazy, Suspense } from "react";
const Breadcrumbs = lazy(() => import('@components/bradCumps').then(({ Breadcrumbs }) => ({ default: Breadcrumbs })))
export const PageAboutUs: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Suspense fallback={<FallBack />}>
                <Breadcrumbs backgroundImage={midia} />
            </Suspense>
            <FirstSection />
            <FifthSession />
        </>
    )
}