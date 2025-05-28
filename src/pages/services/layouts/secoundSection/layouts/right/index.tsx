import { useSetPreviewMessage } from "@components/forms/contactUs/hooks/useSetPreviewMessage";
import { Image } from "@pages/components/image";
import { Paragraph } from "@pages/components/paragraph";
import { SubTitle } from "@pages/components/subTitle";
import type { Item } from "@pages/home/layouts/secoundSection/components/services/item/types";
import { styles } from "@pages/home/styles";
import { createPropsState } from "@pagesServices/layouts/secoundSection/layouts/createPropsState";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export const Right: React.FC<Item> = ({ descriptions, textButon, name, detailsService, midia }: Item) => {
    const { message } = useSetPreviewMessage()
    const navigate = useNavigate();
    const handleService = () => {
        const descriptionsMessage = descriptions.map(item => item.description).join(', ')
        const state = createPropsState({ message, descriptionsMessage, name })
        navigate('/contact', {
            state
        })
    }
    return (
        <>
            <Container style={styles.container} className="d-none d-md-block" >
                <Row className="justify-content-center align-items-center" >
                    <Col md={12} lg={6} xxl={7} sm={12} >
                        <Image src={midia} />
                    </Col>
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12} >
                        <SubTitle text={name} />
                        <Paragraph items={detailsService} />
                        < Button onClick={handleService} variant="oxford" className="w-100 mb-5 text-uppercase" size="lg" >
                            {textButon}
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container style={styles.container} className="d-block d-md-none" >
                <Row className="justify-content-center align-items-center" >
                    <Col md={12} className="mt-5 mb-3" lg={6} xxl={5} sm={12} >
                        <SubTitle text={name} />
                        <Paragraph items={detailsService} />
                        <Button onClick={handleService} variant="oxford" className="w-100 mb-5 text-uppercase" size="lg" >
                            {textButon}
                        </Button>
                    </Col>
                    <Col md={12} lg={6} xxl={7} sm={12} >
                        <Image src={midia} direction="right" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}