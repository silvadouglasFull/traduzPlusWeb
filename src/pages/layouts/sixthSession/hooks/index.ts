import { useLanguage } from "@context/language/hooks"
import { previewMessage } from "@flavor/constants/texts/sixSection/previewMessageSendForm"
import type { UseChangeLanguage } from "@pages/layouts/sixthSession/hooks/types"
import { useEffect, useState } from "react"

export const useChangeLanguage = (): UseChangeLanguage => {
    const [message, setMessage] = useState<string>('')
    const { language: hookLanguage } = useLanguage()
    const setDefaultMessage = () => {
        const defaulteMessage = previewMessage.find(item => item.language === hookLanguage)?.message ?? previewMessage[0].message
        return defaulteMessage
    }
    useEffect(() => {
        setMessage(setDefaultMessage())
    }, [])
    return { message }
}