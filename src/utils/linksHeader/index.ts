import type { LinkItem } from "@components/navbarPublic/links/item/types";
import { PageAboutUs } from "@pages/aboutUs";
import { PageHome } from '@pages/home';
export const links: LinkItem[] = [
    // English
    {
        id: 0,
        title: "Home",
        url: "/",
        isActive: true,
        language: 'en',
        element: PageHome
    },
    {
        id: 1,
        title: "About Us",
        url: "/about",
        isActive: false,
        language: 'en',
        element: PageAboutUs
    },
    {
        id: 2,
        title: "Services",
        url: "/services",
        isActive: false,
        language: 'en',
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact",
        isActive: false,
        language: 'en',
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
        isActive: false,
        language: 'en',
    },

    // Portuguese
    {
        id: 5,
        title: "Início",
        url: "/",
        isActive: true,
        language: 'pt',
        element: PageHome
    },
    {
        id: 6,
        title: "Sobre Nós",
        url: "/about",
        isActive: false,
        language: 'pt',
        element: PageAboutUs
    },
    {
        id: 7,
        title: "Serviços",
        url: "/services",
        isActive: false,
        language: 'pt',
    },
    {
        id: 8,
        title: "Contato",
        url: "/contact",
        isActive: false,
        language: 'pt',
    },
    {
        id: 9,
        title: "Blog",
        url: "/blog",
        isActive: false,
        language: 'pt',
    },

    // Chinese Simplified
    {
        id: 10,
        title: "首页",
        url: "/",
        isActive: true,
        language: 'zh',
        element: PageHome
    },
    {
        id: 11,
        title: "关于我们",
        url: "/about",
        isActive: false,
        language: 'zh',
        element: PageAboutUs
    },
    {
        id: 12,
        title: "服务",
        url: "/services",
        isActive: false,
        language: 'zh',
    },
    {
        id: 13,
        title: "联系",
        url: "/contact",
        isActive: false,
        language: 'zh',
    },
    {
        id: 14,
        title: "博客",
        url: "/blog",
        isActive: false,
        language: 'zh',
    }
];
