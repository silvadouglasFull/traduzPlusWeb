import { HorizontalScrollSection } from "@pages/home/layouts/secoundSection/components/horizontalScroll"
import { usesetsTheHeightOfAllCards } from "@pages/home/layouts/secoundSection/components/services/hooks"
import { Item } from "@pages/home/layouts/secoundSection/components/services/item"
import type { ServiceListProps } from "@pages/home/layouts/secoundSection/components/services/types"
import type React from "react"
import { Row } from "react-bootstrap"
export const ServicesList: React.FC<ServiceListProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ items }) => {
    const { height, createOffSetHeightList } = usesetsTheHeightOfAllCards({ lengthOfCards: items.length, })
    return (
        <>
            <Row className="d-flex d-md-none justify-content-center align-items-start">
                {items.length ? items.map(item => (
                    <Item key={item.id} {...item} />
                )) : null}
            </ Row>
            <HorizontalScrollSection>
                {items.length ? items.map(item => (
                    <Item {...item} createOffSetHeightList={createOffSetHeightList} height={height} key={item.id} />
                )) : null}
            </HorizontalScrollSection>
        </>
    )
}