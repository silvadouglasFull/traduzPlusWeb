import { useContactUs } from "@components/forms/contactUs/hooks/contactUs"
import { useSetPreviewMessage } from "@components/forms/contactUs/hooks/useSetPreviewMessage"
import { Icon } from "@components/icons"
import { sections } from "@constants/index"
import { colors } from "@flavor/constants/colors"
import { Paragraph } from "@pages/home/layouts/secoundSection/components/services/item/paragraph"
import type { Item as TItem } from "@pages/home/layouts/secoundSection/components/services/item/types"
import { scrollOnElenet } from "@utils/scrollPage/onElement"
import React from "react"
import { Card, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Item: React.FC<TItem> = ({ descriptions, icon, name, link, textButon }) => {
    const { handleForm } = useContactUs()
    const { message } = useSetPreviewMessage()
    const handleService = () => {
        const descriptionsMessage = descriptions.map(item => item.description).join(', ')
        handleForm({ message: `${message.replace('.', '')}: ${name} (${descriptionsMessage})` })
        scrollOnElenet(sections.home.contact)
    }
    return (
        <Col className="col-12 mb-3" md={3}>
            <Card style={{
                width: '18.75rem'
            }} className="rounded-4 d-none d-md-flex">
                <Card.Body className="p-5">
                    <Icon name={icon} style={{
                        color: colors.OxfordBlue
                    }} className="mb-4" />
                    <Card.Title className="text-uppercase text-dark">
                        {name}
                    </Card.Title>
                    {descriptions.length ? descriptions.map(item => (<Paragraph key={item.id} {...item} />)) : null}
                </Card.Body>
                <Card.Footer style={{
                    backgroundColor: 'transparent',
                }}>
                    <Link onClick={handleService} to={link} className="btn w-100 btn-dark">
                        {textButon}
                    </Link>
                </Card.Footer>
            </Card>
            <Card className="w-100 rounded-4 d-flex d-md-none">
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
                    <Link onClick={handleService} to={link} className="btn w-100 btn-dark">
                        {textButon}
                    </Link>
                </Card.Footer>
            </Card>
        </Col >
    )
}