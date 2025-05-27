import type { Language } from "@components/carrosel/item/types"
import type { Paragraph } from "@pages/components/paragraph/item/types"

export type Description = {
    id: number
    description: string
}
export type Item = {
    id: number
    icon: string
    name: string
    descriptions: Array<Description>
    textButon: string
    link: string
    language?: Language
    detailsService: Array<Paragraph>
    midia?: string
}