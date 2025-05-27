import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import { SubTitle } from "@pages/components/subTitle";
import type { Item } from "@pages/home/layouts/secoundSection/components/services/item/types";
import { styles } from "@pages/home/styles";
import type React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export const Left: React.FC<Item> = ({ textButon, name, detailsService, midia }: Item) => {
    return (
        <Container style={styles.container} >
            <Row className="justify-content-center align-items-center" >
                <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12} >
                    <SubTitle text={name} />
                    <Paragraph items={detailsService} />
                    <Button variant="oxford" className="w-100 mb-5 text-uppercase" size="lg" >
                        {textButon}
                    </Button>
                </Col>
                < Col md={12} lg={6} xxl={7} sm={12} >
                    <Image src={midia} />
                </Col>
            </Row>
        </Container>
    )
}