
import { AnimationSlide } from "@components/animationSlide/slideLeftRight"
import { Item } from "@pagesHome/components/paragraph/item"
import type { ParagraphProps } from "@pagesHome/components/paragraph/types"
import type React from "react"
export const Paragraph: React.FC<ParagraphProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> = (paragraphProps) => {
    return (
        <AnimationSlide direction="right">
            {paragraphProps.items.length ? paragraphProps.items.map(item => (
                <Item {...paragraphProps} key={item.id} {...item} />
            )) : null}
        </AnimationSlide>
    )
}