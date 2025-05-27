import type { TTitleSectionLink } from "@components/footer/links/titleSectionLink/types";
import { useLanguage } from "@context/language/hooks";
import { useEffect, useState } from "react";

export const useChangeLanguage = (titlesSectionLink: Array<TTitleSectionLink>): TTitleSectionLink => {
    const [titleSectionLink, setTitleSectionLink] = useState<TTitleSectionLink>(titlesSectionLink[0])
    const { language } = useLanguage()
    useEffect(() => {
        setTitleSectionLink(titlesSectionLink.find(item => item.language === language) ?? titlesSectionLink[0])
    }, [language])
    return {
        ...titleSectionLink
    }
}