import { Icon } from "@components/icons";
import { styles } from "@pagesHome/layouts/fourthSession/components/accordion/item/styles";
import type { Item as TItem } from "@pagesHome/layouts/fourthSession/components/accordion/item/types";
import { Toggle } from "@pagesHome/layouts/fourthSession/components/accordion/toggle";
import "@pagesHome/layouts/fourthSession/components/accordion/toggle/styles.css";
import React from "react";
import { Card, Accordion as ReactBootstrapAccordion, Row } from 'react-bootstrap';
export const Item: React.FC<TItem> = ({ id, title, descriptions }) => {
    return (
        <Card className="border-bottom border-top border border-left-0 border border-right-0">
            <Card.Header style={{
                backgroundColor: 'transparent'
            }}>
                <Toggle eventKey={String(id)}>
                    <Row className="flex-nowrap accordion-color-title align-items-center">
                        <div className="mr-2" style={styles.color}>
                            <Icon name="fa-solid fa-square-plus" />
                        </div>
                        <Card.Text style={styles.color}>
                            {title}
                        </Card.Text>
                    </Row>
                </Toggle>
            </Card.Header>
            <ReactBootstrapAccordion.Collapse eventKey={String(id)}>
                <Card.Body>
                    {descriptions.map(({ description, id }) => (
                        <Card.Text className="text-secondary" key={id}>
                            {description}
                        </Card.Text>
                    ))}
                </Card.Body>
            </ReactBootstrapAccordion.Collapse>
        </Card>
    )
}