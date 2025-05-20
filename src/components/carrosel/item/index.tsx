import { ButtonBlock } from "@components/carrosel/item/Button";
import { Image } from '@components/carrosel/item/image';
import { styles as imageStyles } from '@components/carrosel/item/image/styles';
import { fontSizeDesktop, stylesDesktop, stylesMobile } from '@components/carrosel/item/styles';
import type { ItemProps } from '@components/carrosel/item/types';
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
export const Item: React.FC<ItemProps> = ({ midia, subTitle, title }) => {
    return (
        <>
            <Image src={midia} className='d-block w-100' style={{ ...imageStyles }} />
            <Carousel.Caption className="d-block d-md-none" style={stylesMobile}>
                <Container>
                    <h1 className='text-uppercase font-weight-bold'>{title}</h1>
                    <p className='text-uppercase' style={{
                        fontSize: 14
                    }}>{subTitle}</p>
                    <ButtonBlock className="text-uppercase" />

                </Container>
            </Carousel.Caption>
            <Carousel.Caption className="d-md-block d-none" style={stylesDesktop}>
                <Container>
                    <h1 className='text-uppercase font-weight-bold' style={fontSizeDesktop}>{title}</h1>
                    <p className='text-uppercase' style={{
                        fontSize: 32
                    }}>{subTitle}</p>
                    <ButtonBlock className="text-uppercase" />

                </Container>
            </Carousel.Caption>
        </>
    )
}