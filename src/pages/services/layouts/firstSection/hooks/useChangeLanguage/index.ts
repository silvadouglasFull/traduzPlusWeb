import { useLanguage } from "@context/language/hooks"
import { boxesMinimal } from "@flavor/constants/servicesList/boxesMinimal"
import type { Item } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal/item/types"
import type { Items } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal/types"
import { useEffect, useState } from "react"

export const useChangeLanguage = (): Items => {
    const defaultItems: Item[] = boxesMinimal.filter(item => item.language === 'en')
    const [items, setItems] = useState<Array<Item>>([])
    const { language } = useLanguage()
    useEffect(() => {
        setItems(boxesMinimal.filter(item => item.language === language) ?? defaultItems)
    }, [language])
    return {
        items
    }
}