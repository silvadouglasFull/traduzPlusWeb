import videolg1 from "@assets/traduzPlus/swiper/intro-video-lg.mp4";
import slide1 from "@assets/traduzPlus/swiper/slider-minimal-slide-1-1920x888.jpg";
import slide2 from "@assets/traduzPlus/swiper/slider-minimal-slide-2-1920x888.jpg";
import slide3 from "@assets/traduzPlus/swiper/slider-minimal-slide-3-1920x888.jpg";
import type { Slide } from "@components/heroSlider/types";
export const slides: Slide[] = [
    {
        background: slide1,
        title: 'Open Your Business',
        subtitle: 'to all World',
        buttonText: 'Learn more',
    },
    {
        background: slide2,
        title: 'Professional Translation',
        subtitle: 'Services',
        buttonText: 'Learn more',
    },
    {
        background: slide3,
        title: 'Work with native',
        subtitle: 'speakers',
        buttonText: 'Learn more',
        video: [{ type: 'mp4', url: videolg1 }],
    },
];