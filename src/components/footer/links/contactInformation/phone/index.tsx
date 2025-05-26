import { Icon } from "@components/icons"
import type { Phones as TPhones } from "@flavor/constants/contacts/types"
import { formatPhoneNumber } from "@utils/form/mask/phone"
import type React from "react"
import { Col } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Phones: React.FC<TPhones & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = ({ number, ...props }) => {
    return (
        <Col md={6} sm={12} {...props}>
            <Link className="text-light text-decoration-none" to={`"tel:${number}"`}>
                <Icon name="fa-brands fa-whatsapp" /> {formatPhoneNumber(number, "br")}
            </Link>
        </Col>
    )
}