import { useLanguage } from "@context/language/hooks";
import type { Paragraph } from "@pages/components/paragraph/item/types";
import type { ParagraphProps } from "@pages/components/paragraph/types";
import { useEffect, useState } from "react";

export const useChangeLanguage = (paragraphs: Array<Paragraph>): ParagraphProps => {
    const { language } = useLanguage()
    const [items, setItems] = useState<Array<Paragraph>>(paragraphs)
    useEffect(() => {
        setItems(paragraphs.filter(item => item.language === language))
    }, [language, paragraphs])
    return { items }
}