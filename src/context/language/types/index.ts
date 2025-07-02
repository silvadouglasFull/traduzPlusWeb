import type { Language } from "@components/carrosel/item/types"

export type ContextProvider = {
    language: Language
    setLanguage: React.Dispatch<React.SetStateAction<Language>>
    icon: string | null,
    setIcon: React.Dispatch<React.SetStateAction<string | null>>
}