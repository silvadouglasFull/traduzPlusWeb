import { paragraphs, subTitles } from "@flavor/constants/texts/about/firstSection";
import { useChangeLanguage } from "@hooks/useChangeLanguage/paragraphs";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import { SubTitle } from "@pages/components/subTitle";
import { Left } from "@pagesAboutUs/layouts/firstSection/layouts/left";
import { Right } from "@pagesAboutUs/layouts/firstSection/layouts/right";
import React from "react";
import { Container } from "react-bootstrap";
export const FirstSection: React.FC = () => {
    const { items } = useChangeLanguage(paragraphs)
    const { text } = useChangeLanguageSubTitle(subTitles)
    return (
        <section className="mb-3">
            <Container className="text-center mt-5">
                <SubTitle text={text} />
            </Container>
            <Container>
                {items.map((item, i) => {
                    return (
                        i % 2 === 0 ?
                            <Left key={item.id} showButton={((i + 1) === items.length)} {...item} />
                            :
                            <Right key={item.id} showButton={((i + 1) === items.length)} {...item} />
                    )
                })}
            </Container>
        </section>
    )
}