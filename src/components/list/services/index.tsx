import { Item } from "@components/list/services/item"
import type { ServiceListProps } from "@components/list/services/types"
import type React from "react"
import { CardGroup } from "react-bootstrap"
export const ServicesList: React.FC<ServiceListProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ items }) => {
    return (
        <CardGroup>
            {items.length ? items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </ CardGroup>
    )
}