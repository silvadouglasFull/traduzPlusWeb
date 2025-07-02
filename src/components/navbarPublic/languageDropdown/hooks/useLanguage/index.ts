import type { Languages, UseLanguage } from "@components/navbarPublic/languageDropdown/hooks/useLanguage/types";
import { useLanguage as useLanguageFromContext } from "@context/language/hooks";
import { languages as languagesList } from '@utils/languages';
import { useEffect, useState } from "react";

export const useLanguage = (): UseLanguage => {
    const { language } = useLanguageFromContext()
    const filterLanguages = () => {
        const result = languagesList.find(item => item.language === language)
        if (result) {
            const { items } = result
            return [...items]
        }
        return []
    }
    const [languages, setLanguages] = useState<Languages>(filterLanguages())
    useEffect(() => {
        setLanguages(filterLanguages())
    }, [language])
    return {
        languages
    }
}