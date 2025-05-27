import breadcrumbsAbout from "@assets/greatNewSoluctions/images/about/breadcrumbs-image-1.jpg";
import logo from "@assets/greatNewSoluctions/logo2.png";
import slide1 from "@assets/greatNewSoluctions/swiper/slider-minimal-slide-1-1920x888.jpg";
import slide2 from "@assets/greatNewSoluctions/swiper/slider-minimal-slide-2-1920x888.jpg";
import slide3 from "@assets/greatNewSoluctions/swiper/slider-minimal-slide-3-1920x888.jpg";
import type { ItemProps } from "@components/carrosel/item/types";
import type { BreadCrumps } from "@flavor/constants/assets/types";
export const carroselSlides: Array<ItemProps> = [
    {
        midia: slide1,
        title: 'Professional Translation',
        subTitle: 'Services',
        id: 1,
        language: 'en',
        textButton: 'Learn more',
    },
    {
        midia: slide2,
        title: 'Work with native',
        subTitle: 'Speakers',
        id: 2,
        language: 'en',
        textButton: 'Learn more',
    },
    {
        midia: slide3,
        title: 'Open Your Business',
        subTitle: 'To all World',
        id: 3,
        language: 'en',
        textButton: 'Learn more',
    },
    {
        midia: slide1,
        title: '专业翻译',
        subTitle: '服务',
        id: 4,
        language: 'zh',
        textButton: '了解更多',
    },
    {
        midia: slide2,
        title: '与母语者合作',
        subTitle: '讲者',
        id: 5,
        language: 'zh',
        textButton: '了解更多',
    },
    {
        midia: slide3,
        title: '让您的业务',
        subTitle: '走向世界',
        id: 6,
        language: 'zh',
        textButton: '了解更多',
    },
    {
        midia: slide1,
        title: 'Tradução Profissional',
        subTitle: 'Serviços',
        id: 7,
        language: 'pt',
        textButton: 'Ver mais',
    },
    {
        midia: slide2,
        title: 'Trabalhe com nativos',
        subTitle: 'Falantes',
        id: 8,
        language: 'pt',
        textButton: 'Ver mais',
    },
    {
        midia: slide3,
        title: 'Expanda seu negócio',
        subTitle: 'Para o mundo todo',
        id: 9,
        language: 'pt',
        textButton: 'Ver mais',
    }
]

export const breadCrumps: BreadCrumps[] = [
    {
        id: 0,
        midia: breadcrumbsAbout,
        url: '/about'
    },
    {
        id: 1,
        midia: breadcrumbsAbout,
        url: '/contact'
    },
    {
        id: 2,
        midia: breadcrumbsAbout,
        url: '/services'
    }

]
export { logo };
