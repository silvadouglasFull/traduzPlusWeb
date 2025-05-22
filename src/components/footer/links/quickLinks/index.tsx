import { Pages } from "@components/footer/links/quickLinks/pages";
import { SocialMedia } from "@components/footer/links/quickLinks/socialMedia";
import { socialMidia } from "@flavor/constants/links/socialMidia";
import { links } from "@utils/linksHeader";
import React from "react";
import { TitleSectionLink } from "../titleSectionLink";
export const QuickLinks: React.FC = () => {
    return (
        <>
            <TitleSectionLink title="Quick Links" />
            <hr className="w-100 bg-dark" />
            <Pages items={links} />
            <SocialMedia items={socialMidia} />
        </>
    )
}