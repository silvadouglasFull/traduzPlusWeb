import { Item } from "@pages/home/layouts/secoundSection/components/services/item"
import type { ServiceListProps } from "@pages/home/layouts/secoundSection/components/services/types"
import type React from "react"
import { Row } from "react-bootstrap"
export const ServicesList: React.FC<ServiceListProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ items }) => {
    return (
        <Row className="justify-content-center align-items-start">
            {items.length ? items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </ Row>
    )
}