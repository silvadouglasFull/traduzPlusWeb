import { Icon } from "@components/icons"
import type { Phones as TPhones } from "@flavor/constants/contacts/types"
import type React from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Phones: React.FC<TPhones & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = ({ number, ...props }) => {
    return (
        <Col md={4} sm={12} {...props}>
            <Link className="text-light text-decoration-none" to={`"tel:${number}"`}>
                <Icon name="fa-brands fa-whatsapp" /> {number}
            </Link>
        </Col>
    )
}