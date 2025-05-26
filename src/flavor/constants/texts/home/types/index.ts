import type { Language } from "@components/carrosel/item/types"

export type SubTitle = {
    id: number | string
    text: string
    description?: string
    language: Language
    textButton?: string
}