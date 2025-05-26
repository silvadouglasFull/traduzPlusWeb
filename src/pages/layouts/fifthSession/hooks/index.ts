import { specialButtonsText } from "@flavor/constants/texts/specialButtonText"
import type { UseSetTextButton } from "@pages/layouts/fifthSession/hooks/types"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export const useSetTextButton = (): UseSetTextButton => {
    const [text, setText] = useState<string>('')
    const { pathname } = useLocation()
    useEffect(() => {
        const handleSetText = () => {
            const findText = specialButtonsText.find(item => item.url === pathname)
            if (findText) setText(findText.text)
            else setText('')
        }
        handleSetText()
    }, [pathname])
    return {
        text
    }
}