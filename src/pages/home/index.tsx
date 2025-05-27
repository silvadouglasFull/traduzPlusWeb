import { Provider as ContactUsProvider } from "@components/forms/contactUs/context";
import { FifthSession } from "@pages/layouts/fifthSection";
import { SixthSession } from "@pages/layouts/sixthSession";
import { FirstSection } from "@pagesHome/layouts/firstSection";
import { FourthSession } from "@pagesHome/layouts/fourthSession";
import { SecoundSection } from "@pagesHome/layouts/secoundSection";
import { ThirdSession } from "@pagesHome/layouts/thirdSession";
import React from "react";
export const PageHome: React.FC = () => {
    return (
        <>
            <FirstSection />
            <ContactUsProvider>
                <SecoundSection />
                <ThirdSession />
                <FourthSession />
                <FifthSession />
                <SixthSession />
            </ContactUsProvider>
        </>
    )
}