import { Provider as ContactUsProvider } from "@components/forms/contactUs/context";
import { FifthSession } from "@pagesHome/layouts/fifthSession";
import { FirstSection } from "@pagesHome/layouts/firstSection";
import { FourthSession } from "@pagesHome/layouts/fourthSession";
import { SecoundSection } from "@pagesHome/layouts/secoundSection";
import { SixthSession } from "@pagesHome/layouts/sixthSession";
import { ThirdSession } from "@pagesHome/layouts/thirdSession";

import React from "react";
export const PageHome: React.FC = () => {
    return (
        <>
            <FirstSection />
            <SecoundSection />
            <ThirdSession />
            <FourthSession />
            <FifthSession />
            <ContactUsProvider>
                <SixthSession />
            </ContactUsProvider>
        </>
    )
}