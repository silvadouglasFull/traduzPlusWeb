import { useLanguage } from "@context/language/hooks"
import { useEffect } from "react"

export const useChangeLanguage = (): { language: string } => {
    const { language } = useLanguage()
    useEffect(() => {
        window.document.documentElement.lang = language
    }, [language])
    return { language }
}