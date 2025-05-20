import { Item } from "@pagesHome/layouts/fourthSession/components/accordion/item";
import "@pagesHome/layouts/fourthSession/components/accordion/toggle/styles.css";
import type { AccordionProps } from "@pagesHome/layouts/fourthSession/components/accordion/types";
import React from "react";
import { Accordion as ReactBootstrapAccordion } from 'react-bootstrap';
export const Accordion: React.FC<AccordionProps & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
> = ({ items }) => {
    return (
        <ReactBootstrapAccordion>
            {items.length ? items.map(item => (
                <Item key={item.id} {...item} />
            )) : null}
        </ReactBootstrapAccordion>
    )
}