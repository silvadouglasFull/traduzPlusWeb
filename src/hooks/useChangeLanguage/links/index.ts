import type { LinkItem } from "@components/navbarPublic/links/item/types";
import type { LinksProps } from "@components/navbarPublic/links/types";
import { useLanguage } from "@context/language/hooks";
import { links } from "@utils/linksHeader";
import { useEffect, useState } from "react";

export const useChangeLanguage = (): LinksProps => {
    const [linksNavBar, setLinksNavbar] = useState<Array<LinkItem>>(links.filter(item => item.language === 'pt'))
    const { language } = useLanguage()
    useEffect(() => {
        setLinksNavbar(links.filter(item => item.language === language))
    }, [language])
    return {
        items: linksNavBar
    }
}