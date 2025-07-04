import { titleSectionLink } from "@components/footer/links/contactInformation/constants";
import { Phones } from "@components/footer/links/contactInformation/phone";
import { TitleSectionLink } from "@components/footer/links/titleSectionLink";
import { useChangeLanguage } from "@components/footer/links/titleSectionLink/hooks/useChangeLanguage";
import { Icon } from "@components/icons";
import type { Contact } from "@flavor/constants/contacts/types";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ContactInformation: React.FC<Contact & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = ({ email, phones }) => {
    const { title } = useChangeLanguage(titleSectionLink)
    return (
        <>
            <TitleSectionLink title={title} />
            <hr className="bg-dark w-100" />
            <Row>
                <Col sm={12} md={8}>
                    <Link className="text-light text-decoration-none" to="#">
                        <Icon name="fa-solid fa-envelope" /> {email}
                    </Link>
                </Col>
                {phones.length ? (phones.map((item) => (
                    <Phones key={item.key} number={item.number} />
                ))) : null}
            </Row>
        </>
    )
}