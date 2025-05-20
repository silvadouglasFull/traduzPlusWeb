import type { Item as TItem } from "@components/list/services/item/types"
import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Paragraph } from "./paragraph"
import './styles.css'
export const Item: React.FC<TItem> = ({ descriptions, icon, name, link, textButon, }) => {
    return (
        <Card className="m-2 card-services-list rounded-4">
            <i className={icon}></i>
            <Card.Body>
                <Card.Title style={{
                    color: '#fff'
                }}>
                    {name}
                </Card.Title>
                {descriptions.length ? descriptions.map(item => (<Paragraph key={item.id} {...item} />)) : null}
            </Card.Body>
            <Card.Footer>
                <Link to={link} className="btn btn-dark">
                    {textButon}
                </Link>
            </Card.Footer>
        </Card>
    )
}