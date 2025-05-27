import { ListBoxesMinimal } from "@pagesServices/layouts/firstSection/components/listBoxesMinimal";
import { useChangeLanguage } from "@pagesServices/layouts/firstSection/hooks/useChangeLanguage";
import React from "react";
import { Container } from "react-bootstrap";
export const FirstSection: React.FC = () => {
    const { items } = useChangeLanguage()
    return (
        <section className="mb-3 p-3 bg-dark">
            <Container className="mt-3">
                <ListBoxesMinimal items={items} />
            </Container>
        </section>
    )
}