import { useLanguage } from "@context/language/hooks"
import { specialButtonsText } from "@flavor/constants/texts/specialButtonText"
import type { UseSetTextButton } from "@pages/layouts/fifthSection/hooks/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useSetTextButton = (): UseSetTextButton => {
    const [text, setText] = useState<string>('')
    const { language } = useLanguage()
    const { pathname } = useLocation()
    useEffect(() => {
        const handleSetText = () => {
            const findText = specialButtonsText.find(item => (item.url === pathname) && (item.language === language))
            if (findText) setText(findText.text)
            else setText('')
        }
        handleSetText()
    }, [pathname, language])
    return {
        text
    }
}