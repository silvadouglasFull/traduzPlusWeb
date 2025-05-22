import { Phones } from "@components/footer/links/contactInformation/phone";
import { TitleSectionLink } from "@components/footer/links/titleSectionLink";
import { Icon } from "@components/icons";
import type { Contact } from "@flavor/constants/contacts/types";
import React from "react";
import { Link } from "react-router-dom";
export const ContactInformation: React.FC<Contact & React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>> = ({ email, phones, address }) => {
    return (
        <>
            <TitleSectionLink title="Contact Information" />
            <hr className="bg-dark w-100" />
            <p>
                <Link className="text-light" to="#">
                    <Icon name="fa fa-home" /> {address}
                </Link>
            </p>
            {phones.length ? (phones.map(item => (
                <Phones key={item.key} number={item.number} />
            ))) : null}
        </>
    )
}