import { boxesMinimal } from "@flavor/constants/servicesList/boxesMinimal";
import { ListBoxesMinimal } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal";
import React from "react";
import { Container } from "react-bootstrap";
export const FirstSection: React.FC = () => {
    return (
        <section className="mb-3 p-3 bg-dark">
            <Container className="mt-3">
                <ListBoxesMinimal items={boxesMinimal} />
            </Container>
        </section>
    )
}