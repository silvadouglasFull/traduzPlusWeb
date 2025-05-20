import { FirstSection } from "@pagesHome/layouts/firstSection";
import { SecoundSection } from "@pagesHome/layouts/secoundSection";
import { ThirdSession } from "@pagesHome/layouts/thirdSession";
import React from "react";

export const PageHome: React.FC = () => {
    return (
        <>
            <FirstSection />
            <SecoundSection />
            <ThirdSession />
        </>
    )
}