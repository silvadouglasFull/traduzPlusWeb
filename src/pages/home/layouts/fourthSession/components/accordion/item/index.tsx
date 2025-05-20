import { Icon } from "@components/icons";
import type { Item as TItem } from "@pagesHome/layouts/fourthSession/components/accordion/item/types";
import { Toggle } from "@pagesHome/layouts/fourthSession/components/accordion/toggle";
import "@pagesHome/layouts/fourthSession/components/accordion/toggle/styles.css";
import React from "react";
import { Card, Accordion as ReactBootstrapAccordion, Row } from 'react-bootstrap';
export const Item: React.FC<TItem> = ({ id, title, descriptions }) => {
    return (
        <Card className="border-bottom border-top border border-left-0 border border-right-0">
            <Card.Header>
                <Toggle eventKey={String(id)}>
                    <Row className="flex-nowrap accordion-color-title align-items-center">
                        <div className="mr-2">
                            <Icon name="fa-solid fa-square-plus" />
                        </div>
                        <Card.Text>
                            {title}
                        </Card.Text>
                    </Row>
                </Toggle>
            </Card.Header>
            <ReactBootstrapAccordion.Collapse eventKey="0">
                <Card.Body>
                    {descriptions.map(({ description, id }) => (
                        <Card.Text key={id}>
                            {description}
                        </Card.Text>
                    ))}
                </Card.Body>
            </ReactBootstrapAccordion.Collapse>
        </Card>
    )
}