import { Pages } from "@components/footer/links/quickLinks/pages";
import { SocialMedia } from "@components/footer/links/quickLinks/socialMedia";
import { TitleSectionLink } from "@components/footer/links/titleSectionLink";
import { titleSectionLink as titlesSectionLink } from "@components/footer/links/titleSectionLink/constants";
import { useChangeLanguage } from "@components/footer/links/titleSectionLink/hooks/useChangeLanguage";
import { socialMidia } from "@flavor/constants/links/socialMidia";
import { useChangeLanguage as useChangeLanguageLinks } from "@hooks/useChangeLanguage/links";
import React from "react";
export const QuickLinks: React.FC = () => {
    const { title } = useChangeLanguage(titlesSectionLink)
    const { items } = useChangeLanguageLinks()

    return (
        <>
            <TitleSectionLink title={title} />
            <hr className="w-100 bg-dark" />
            <Pages items={items} />
            <SocialMedia items={socialMidia} />
        </>
    )
}