import { Item } from "@components/list/services/item"
import type { ServiceListProps } from "@components/list/services/types"
import type React from "react"
import { Row } from "react-bootstrap"
export const ServicesList: React.FC<ServiceListProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ items }) => {
    return (
        <Row className="justify-content-start align-items-start">
            {items.length ? items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </ Row>
    )
}