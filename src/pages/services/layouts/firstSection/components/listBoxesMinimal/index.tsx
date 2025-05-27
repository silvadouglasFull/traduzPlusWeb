import { Item } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal/item";
import type { ListBoxesMinimal as TListBoxesMinimal } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal/types";
import React from "react";
import { Row } from "react-bootstrap";
export const ListBoxesMinimal: React.FC<TListBoxesMinimal> = ({ items, ...props }: TListBoxesMinimal) => {
    return (
        <Row {...props} className="p-3 d-flex justify-content-center align-items-start">
            {items.length ? items.map(item => {
                const { id, ...rest } = item;
                return <Item key={id} {...rest} id={id.toString()} />;
            }) : null}
        </Row>
    )
}