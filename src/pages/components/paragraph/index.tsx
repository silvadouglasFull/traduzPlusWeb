
import { Item } from "@pages/components/paragraph/item"
import type { ParagraphProps } from "@pages/components/paragraph/types"
import type React from "react"
export const Paragraph: React.FC<ParagraphProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = (paragraphProps) => {
    return (
        paragraphProps.items.length ? paragraphProps.items.map(item => (
            <Item
                {...paragraphProps}
                key={typeof item.id === "number" ? item.id : undefined}
                {...{
                    ...item,
                    id: typeof item.id === "number" ? item.id : undefined
                }}
            />
        )) : null)
}