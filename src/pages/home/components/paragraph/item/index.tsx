import type { Item as TItem } from "@pagesHome/components/paragraph/item/types";
export const Item: React.FC<TItem> = (propsItem: TItem) => {
    return (
        <p {...propsItem}>
            {propsItem.text}
        </p>
    )
}