import type { Item } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal/item/types"
import type React from "react"
export type Items = {
    items: Array<Item>
}
export type ListBoxesMinimal = Items & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>