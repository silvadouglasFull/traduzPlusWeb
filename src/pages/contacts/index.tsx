import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { FallBack } from "@components/fallback";
import { Provider as ContactUsProvider } from "@components/forms/contactUs/context";
import { SixthSession } from "@pages/layouts/sixthSession";
import { FirstSection } from "@pagesContacts/layouts/firstSection";
import React, { lazy, Suspense } from "react";
const Breadcrumbs = lazy(() => import('@components/bradCumps').then(({ Breadcrumbs }) => ({ default: Breadcrumbs })))

export const PageContact: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Suspense fallback={<FallBack />}>
                <Breadcrumbs backgroundImage={midia} />
            </Suspense>
            <FirstSection />
            <ContactUsProvider>
                <SixthSession />
            </ContactUsProvider>
        </>
    )
}