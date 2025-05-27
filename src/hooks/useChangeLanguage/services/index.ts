import { useLanguage } from "@context/language/hooks";
import type { Item } from "@pages/home/layouts/secoundSection/components/services/item/types";
import type { ServiceListProps } from "@pages/home/layouts/secoundSection/components/services/types";
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