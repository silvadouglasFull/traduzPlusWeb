import { Icon } from "@components/icons"
import type { Item as TItem } from "@components/list/services/item/types"
import React from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Paragraph } from "./paragraph"
import './styles.css'
export const Item: React.FC<TItem> = ({ descriptions, icon, name, link, textButon, }) => {
    return (
        <Col className="col-12 mb-3" md={3}>
            <Card style={{
                height: '28.125rem',
                width: '18rem'
            }} className="rounded-4 d-none d-md-flex">
                <Card.Body className="p-5">
                    <Icon name={icon} style={{
                        color: '#081a48'
                    }} className="mb-4 icon" />
                    <Card.Title className="text-uppercase text-dark">
                        {name}
                    </Card.Title>
                    {descriptions.length ? descriptions.map(item => (<Paragraph key={item.id} {...item} />)) : null}
                </Card.Body>
                <Card.Footer style={{
                    backgroundColor: 'transparent',
                }}>
                    <Link to={link} className="btn w-100 btn-dark">
                        {textButon}
                    </Link>
                </Card.Footer>
            </Card>

            <Card style={{
                height: '28.125rem',
                width: '100%'
            }} className="rounded-4 d-flex d-md-none">
                <Card.Body className="p-5">
                    <Icon name={icon} style={{
                        color: '#081a48'
                    }} className="mb-4 icon" />
                    <Card.Title className="text-uppercase text-dark">
                        {name}
                    </Card.Title>
                    {descriptions.length ? descriptions.map(item => (<Paragraph key={item.id} {...item} />)) : null}
                </Card.Body>
                <Card.Footer style={{
                    backgroundColor: 'transparent',
                }}>
                    <Link to={link} className="btn w-100 btn-dark">
                        {textButon}
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    )
}