import { paragraphs, subTitles } from "@flavor/constants/texts/about/firstSection";
import { useChangeLanguage } from "@hooks/useChangeLanguage/paragraphs";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import { SubTitle } from "@pages/components/subTitle";
import React from "react";
import { Container } from "react-bootstrap";
import { Left } from "./layouts/left";
import { Right } from "./layouts/right";
export const FirstSection: React.FC = () => {
    const { items } = useChangeLanguage(paragraphs)
    const { text } = useChangeLanguageSubTitle(subTitles)
    return (
        <section className="mb-3">
            <Container className="text-center mt-5">
                <SubTitle text={text} />
                <p className="font-weight-bold">Noster pars vix falleres valebat est. Ire velox ducunt ad ferox zirbus.</p>
            </Container>
            <Container>
                {items.map((item, i) => (
                    i % 2 === 0 ?
                        <Right key={item.id} {...item} />
                        :
                        <Left key={item.id} {...item} />
                ))}
            </Container>
        </section>
    )
}