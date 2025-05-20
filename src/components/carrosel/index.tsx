import { Item } from "@components/carrosel/item";
import type { CarroselProps } from "@components/carrosel/types";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
export const ControlledCarousel: React.FC<CarroselProps> = ({ items }) => {
    const [index, setIndex] = useState(1);
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel style={{
            position: 'fixed',
            top: 0
        }} activeIndex={index} onSelect={handleSelect} controls={false} indicators={true}>
            {items.length ? items.map(item => (
                <Carousel.Item key={item.id}>
                    <Item
                        midia={item.midia}
                        subTitle={item.subTitle}
                        title={item.title}
                    />

                </Carousel.Item>
            )) : null}
        </Carousel>
    );
}
