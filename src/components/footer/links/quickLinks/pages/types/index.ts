import type { Item as TItem } from "@components/footer/links/quickLinks/pages/item/types";

export type Items = {
    items: Array<TItem>
}
export type TPages = Items & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>