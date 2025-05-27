import type { Language } from "@components/carrosel/item/types"

export type Item = {
    id: number | string
    icon: string
    nameBox: string
    description: string
    language?: Language
}