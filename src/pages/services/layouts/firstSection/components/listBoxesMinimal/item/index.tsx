import { Icon } from "@components/icons";
import { colors } from "@flavor/constants/colors";
import type { Item as TItem } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal/item/types";
import React from "react";
import { Col, Row } from "react-bootstrap";
export const Item: React.FC<TItem & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> = ({ description, icon, id, nameBox, ...props }: TItem) => {
    return (
        <Col sm={12} md={4} className="w-100">
            <article {...props}>
                <Row className="d-flex justify-content-start align-items-start flex-nowrap">
                    <div className="mr-2">
                        <Icon name={icon} style={{
                            color: colors.OxfordBlue,
                        }} />
                    </div>
                    <div className="w-100">
                        <Col className="col-12">
                            <h4 className="font-weight-bold" style={{
                                color: colors.OxfordBlue
                            }}>
                                {nameBox}
                            </h4>
                            <p className=" text-secondary">{description}</p>
                        </Col>
                    </div>
                </Row>
            </article>
        </Col>
    )
}