import { Provider as ContactUsProvider } from "@components/forms/contactUs/context";
import { FirstSection } from "@pagesServices/layouts/firstSection";
import { SecoundSection } from "@pagesServices/layouts/secoundSection";
import React from "react";

export const PageServices: React.FC = () => {
    return (
        <>
            <FirstSection />
            <ContactUsProvider>
                <SecoundSection />
            </ContactUsProvider>
        </>
    )
}