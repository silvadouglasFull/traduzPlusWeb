import type { ItemProps } from "@components/carrosel/item/types";
import { VITE_CLOUD_FLARE } from "@config/index";
import { slide1, slide2, slide3 } from "@flavor/constants/assets/slides";
import type { BreadCrumps } from "@flavor/constants/assets/types";
export const breadcrumbsAbout = `${VITE_CLOUD_FLARE}/greatNewSoluctions/images/about/breadcrumbs-image-1.jpg`;
export const logo = `${VITE_CLOUD_FLARE}/greatNewSoluctions/logo-light.png`;

export const carroselSlides: Array<ItemProps> = [
    {
        midia: slide1,
        title: 'The agency that transforms language into a business bridge',
        subTitle: '"Translation, interpretation and consultancy for companies that want to negotiate with clarity and confidence in the Sino-Brazilian world.”',
        id: 1,
        language: 'en',
        textButton: 'Learn more',
    },
    {
        midia: slide1,
        title: '将语言转化为商业桥梁的机构',
        subTitle: '“为希望在中巴世界中清晰、自信地进行谈判的公司提供翻译、口译和咨询服务。”',
        id: 4,
        language: 'zh',
        textButton: '了解更多',
    },
    {
        midia: slide1,
        title: 'A agência que transforma idioma em ponte de negócios',
        subTitle: `“Tradução, interpretação e consultoria para empresas que querem negociar com clareza e confiança no mundo sino-brasileiro.” `,
        id: 7,
        language: 'pt',
        textButton: 'Ver mais',
    },
    {
        midia: slide2,
        title: "We don't translate everything. We translate what matters",
        subTitle: '“Total focus on communication between Brazil, China and the global market — with real depth and excellence.”',
        id: 2,
        language: 'en',
        textButton: 'Learn more',
    },
    {
        midia: slide2,
        title: '我们不是翻译一切，而是精准传达真正关键的信息',
        subTitle: '"专注中巴及全球市场沟通，深度专业，追求卓越"',
        id: 5,
        language: 'zh',
        textButton: '了解更多',
    },
    {
        midia: slide2,
        title: 'Não traduzimos tudo. Traduzimos o que importa',
        subTitle: '“Foco total na comunicação entre Brasil, China e mercado global — com profundidade e excelência real.”',
        id: 8,
        language: 'pt',
        textButton: 'Ver mais',
    },
    {
        midia: slide3,
        title: 'Professional Translation and Interpretation between Mandarin, Portuguese and English',
        subTitle: '“Experts in eliminating communication barriers with quality, precision and cultural sensitivity.”',
        id: 3,
        language: 'en',
        textButton: 'Learn more',
        style: {
            objectPosition: 'center 15%'
        }
    },
    {
        midia: slide3,
        title: '专业的普通话、葡萄牙语和英语之间的翻译和口译',
        subTitle: '“我们致力于以高质量、高精度和文化敏感性消除沟通障碍。”',
        id: 6,
        language: 'zh',
        textButton: '了解更多',
        style: {
            objectPosition: 'center 15%'
        }

    },

    {
        midia: slide3,
        title: 'Tradução e Interpretação Profissional entre Mandarim, Português e Inglês',
        subTitle: '“Especialistas em eliminar barreiras de comunicação com qualidade, precisão e sensibilidade cultural.” ',
        id: 9,
        language: 'pt',
        textButton: 'Ver mais',
        style: {
            objectPosition: 'center 15%'
        }

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
