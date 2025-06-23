import type React from "react"

export type Language = 'en' | 'pt' | 'zh'
export type ItemProps = {
    midia: string
    title: string
    subTitle: string
    id?: number
    language?: Language
    textButton?: string
    style?: React.CSSProperties
}