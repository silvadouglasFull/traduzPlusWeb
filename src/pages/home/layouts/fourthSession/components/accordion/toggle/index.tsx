import type { ToggleProps } from "@pagesHome/layouts/fourthSession/components/accordion/toggle/types";
import type React from "react";
import { useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Toggle: React.FC<ToggleProps> = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <Link to={'#'} className="text-decoration-none"
            onClick={decoratedOnClick}
        >
            {children}
        </Link>
    );
}