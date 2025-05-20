import type { ToggleProps } from "@pagesHome/layouts/fourthSession/components/accordion/toggle/types";
import type React from "react";
import { useAccordionButton } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Toggle: React.FC<ToggleProps> = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <Link to={'#'}
            className="mr-2 btn btn-sm"
            onClick={decoratedOnClick}
        >
            {children}
        </Link>
    );
}