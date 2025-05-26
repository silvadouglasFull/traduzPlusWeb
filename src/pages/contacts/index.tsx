import { Breadcrumbs } from "@components/bradCumps";
import { useGetImageBradCrumps } from "@components/bradCumps/hooks";
import { Provider as ContactUsProvider } from "@components/forms/contactUs/context";
import { SixthSession } from "@pages/layouts/sixthSession";
import { FirstSection } from "@pagesContacts/layouts/firstSection";

import type React from "react";

export const PageContact: React.FC = () => {
    const { midia } = useGetImageBradCrumps()
    return (
        <>
            <Breadcrumbs backgroundImage={midia} />
            <FirstSection />
            <ContactUsProvider>
                <SixthSession />
            </ContactUsProvider>
        </>
    )
}