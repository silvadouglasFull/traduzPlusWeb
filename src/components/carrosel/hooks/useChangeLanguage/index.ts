import type { ItemProps } from "@components/carrosel/item/types"
import type { CarroselProps } from "@components/carrosel/types"
import { useLanguage } from "@context/language/hooks"
import { carroselSlides } from "@flavor/constants"
import { useEffect, useState } from "react"

export const useChangeLanguage = (): CarroselProps => {
    const { language } = useLanguage()
    const [items, setItems] = useState<Array<ItemProps>>(carroselSlides)
    useEffect(() => {
        setItems(carroselSlides.filter(item => item.language === language))
    }, [language])
    return { items }
}