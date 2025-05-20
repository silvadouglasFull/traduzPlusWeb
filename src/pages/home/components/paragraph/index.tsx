
import { Item } from "@pagesHome/components/paragraph/item"
import type { ParagraphProps } from "@pagesHome/components/paragraph/types"
import type React from "react"
export const Paragraph: React.FC<ParagraphProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>> = (paragraphProps) => {
    return (
        <>
            {paragraphProps.items.length ? paragraphProps.items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </>
    )
}