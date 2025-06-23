import { Icon } from "@components/icons";
import type { Item as TItem } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal/item/types";
import React from "react";
import { Col, Row } from "react-bootstrap";
export const Item: React.FC<TItem & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ description, icon, id, nameBox, ...props }: TItem) => {
    return (
        <Col sm={12} md={4}>
            <article {...props}>
                <Row className="d-flex justify-content-start align-items-start flex-nowrap">
                    <Col className="me-2">
                        <Icon name={icon} className="text-light" />
                    </Col>
                    <Col className="col-12">
                        <h4 className="font-weight-bold text-light">
                            {nameBox}
                        </h4>
                        <p className=" text-secondary">{description}</p>
                    </Col>
                </Row>
            </article>
        </Col>
    )
}