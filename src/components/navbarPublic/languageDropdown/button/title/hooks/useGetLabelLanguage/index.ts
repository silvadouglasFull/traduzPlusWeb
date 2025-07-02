import type { UseGetLabelLanguage } from "@components/navbarPublic/languageDropdown/button/title/hooks/useGetLabelLanguage/types";
import { useLanguage } from "@context/language/hooks";
import { languageLabelDropDown } from "@utils/languages";
import { useEffect, useState } from "react";

export const useGetLanguage = (): UseGetLabelLanguage => {
    const { language } = useLanguage()
    const [label, setLabel] = useState<string>('Language')
    useEffect(() => {
        setLabel(languageLabelDropDown.find(item => item.language === language)?.label ?? 'Language')
    }, [language])
    return {
        label
    }
}