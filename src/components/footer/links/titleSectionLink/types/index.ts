import type { Language } from "@components/carrosel/item/types"

export type Title = {
    title: string
    language?: Language
}
export type TTitleSectionLink = Title & React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> 