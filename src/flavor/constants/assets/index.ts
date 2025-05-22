import logo from "@assets/greatNewSoluctions/logo2.png";
import slide1 from "@assets/traduzPlus/swiper/slider-minimal-slide-1-1920x888.jpg";
import slide2 from "@assets/traduzPlus/swiper/slider-minimal-slide-2-1920x888.jpg";
import slide3 from "@assets/traduzPlus/swiper/slider-minimal-slide-3-1920x888.jpg";
import type { ItemProps } from "@components/carrosel/item/types";
export const carroselSlides: Array<ItemProps> = [
    {
        midia: slide1,
        title: 'Professional Translation',
        subTitle: 'Services',
        id: 1,
    },
    {
        midia: slide2,
        title: 'Work with native',
        subTitle: 'Speakers',
        id: 2,
    },
    {
        midia: slide3,
        title: 'Open Your Business',
        subTitle: 'To all World',
        id: 3,
    }
]
export { logo };
