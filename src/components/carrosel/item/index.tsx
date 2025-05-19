import { ButtonBlock } from "@components/carrosel/item/Button";
import { Image } from '@components/carrosel/item/image';
import { styles as imageStyles } from '@components/carrosel/item/image/styles';
import { styles } from '@components/carrosel/item/styles';
import type { ItemProps } from '@components/carrosel/item/types';
import { Container } from "react-bootstrap";

import Carousel from 'react-bootstrap/Carousel';
export const Item: React.FC<ItemProps> = ({ midia, subTitle, title }) => {
    return (
        <>
            <Image src={midia} className='d-block w-100' style={{ ...imageStyles }} />
            <Carousel.Caption style={styles}>
                <Container>
                    <h3 className='text-uppercase font-weight-bold' style={{
                        fontSize: '3.125rem'
                    }}>{title}</h3>
                    <p className='text-uppercase'>{subTitle}</p>
                    <ButtonBlock className="text-uppercase" />

                </Container>
            </Carousel.Caption>
        </>
    )
}