import { useLanguage } from "@context/language/hooks";
import { accordions } from "@flavor/constants/texts/home/fourthSection";
import type { Item } from "@pagesHome/layouts/fourthSession/components/accordion/item/types";
import type { AccordionProps } from "@pagesHome/layouts/fourthSession/components/accordion/types";
import { useEffect, useState } from "react";

export const useChangeLanguage = (): AccordionProps => {
    const { language } = useLanguage()
    const [items, setItems] = useState<Array<Item>>(accordions)
    useEffect(() => {
        setItems(accordions.filter(item => item.language === language))
    }, [language])
    return {
        items
    }
}