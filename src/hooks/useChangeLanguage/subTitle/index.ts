import { useLanguage } from "@context/language/hooks";
import type { SubTitle } from "@flavor/constants/texts/home/types";
import { useEffect, useState } from "react";
export const useChangeLanguage = (subtitles: Array<SubTitle>): SubTitle => {
    const { language } = useLanguage()
    const [item, setItem] = useState<SubTitle>(subtitles[0])
    useEffect(() => {
        setItem(subtitles.find(item => item.language === language) ?? subtitles[0])
    }, [language, subtitles])
    return { ...item }
}