import type { Language } from "@components/carrosel/item/types"
import type React from "react"

export type Description = {
    id: string | number,
    description: string
}
export type Item = {
    id: number | number,
    title: string
    descriptions: Array<Description>
    language?: Language
}
export type Styles = {
    color: React.CSSProperties
}