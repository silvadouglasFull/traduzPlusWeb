import { Provider as ContactUsProvider } from "@components/forms/contactUs/context";
import { SixthSession } from "@pages/layouts/sixthSession";
import { FirstSection } from "@pagesContacts/layouts/firstSection";
import React from "react";

export const PageContact: React.FC = () => {
    return (
        <>
            <FirstSection />
            <ContactUsProvider>
                <SixthSession />
            </ContactUsProvider>
        </>
    )
}