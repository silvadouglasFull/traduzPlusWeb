import type { Item } from "@components/list/services/item/types";
import type { ServiceListProps } from "@components/list/services/types";
import { useLanguage } from "@context/language/hooks";
import { useEffect, useState } from "react";

export const useChangeLanguage = (servicesList: Array<Item>): ServiceListProps => {
    const { language } = useLanguage()
    const [items, setItems] = useState<Array<Item>>([])
    useEffect(() => {
        setItems(servicesList.filter(item => item.language === language))
    }, [language, servicesList])
    return {
        items
    }
}