import { AnimationSlide } from "@components/animationSlide/slideLeftRight";
import { sections } from "@constants/index";
import { imageFromFourthSection } from "@flavor/constants/assets/home/fourthSection";
import { subTitle } from "@flavor/constants/texts/home/fourthSession";
import { useChangeLanguage as useChangeLanguageSubTitle } from "@hooks/useChangeLanguage/subTitle";
import { Image } from "@pages/components/image";
import { SubTitle } from "@pages/components/subTitle";
import { styles } from "@pages/home/styles";
import { Accordion } from "@pagesHome/layouts/fourthSession/components/accordion";
import { useChangeLanguage } from "@pagesHome/layouts/fourthSession/hooks/useChangeLanguage";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const FourthSession: React.FC = () => {
    const { text } = useChangeLanguageSubTitle(subTitle)
    const { items } = useChangeLanguage()
    return (
        <section className="p-3 mb-3" id={sections.home.faq}>
            <Container style={styles.container}>
                <Row className="justify-content-center align-items-center">
                    <Col>
                        <Image src={imageFromFourthSection} />
                    </Col>
                    <Col className="mt-5">
                        <SubTitle text={text} />
                        <AnimationSlide direction="right">
                            <Accordion items={items} />
                        </AnimationSlide>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}