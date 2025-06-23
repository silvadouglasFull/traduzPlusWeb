import { Image } from '@components/carrosel/item/image';
import { styles as imageStyles } from '@components/carrosel/item/image/styles';
import { stylesDesktop, stylesMobile } from '@components/carrosel/item/styles';
import type { ItemProps } from '@components/carrosel/item/types';
import { sections } from '@constants/index';
import { scrollOnElenet } from '@utils/scrollPage/onElement';
import { Button, Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
export const Item: React.FC<ItemProps> = ({ midia, subTitle, title, textButton }) => {
    const handleScrollForm = (): void => {
        scrollOnElenet(sections.home.contact)
    }
    return (
        <>
            <Image src={midia} className='d-block w-100' style={{ ...imageStyles }} />
            <Carousel.Caption className="d-block d-md-none" style={stylesMobile}>
                <Container>
                    <h1 className='font-weight-bold'>{title}</h1>
                    <p className='fst-italic'>{subTitle}</p>
                    <Button onClick={handleScrollForm} size="lg" className='w-90' variant="outline-light">
                        {textButton}
                    </Button>
                </Container>
            </Carousel.Caption>
            <Carousel.Caption className="d-md-block d-none" style={stylesDesktop}>
                <Container>
                    <h1 className='font-weight-bold'>{title}</h1>
                    <p className='fst-italic'>{subTitle}</p>
                    <Button onClick={handleScrollForm} size="lg" className='w-90' variant="outline-light">
                        {textButton}
                    </Button>
                </Container>
            </Carousel.Caption>
        </>
    )
}