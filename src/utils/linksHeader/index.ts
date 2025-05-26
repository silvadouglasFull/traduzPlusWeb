import type { LinkItem } from "@components/navbarPublic/links/item/types";
import { PageAboutUs } from "@pages/aboutUs";
import { PageHome } from '@pages/home';
export const links: LinkItem[] = [
    {
        id: 0,
        title: "Home",
        url: "/",
        isActive: true,
        element: PageHome
    },
    {
        id: 1,
        title: "About Us",
        url: "/about",
        isActive: false,
        element: PageAboutUs
    },
    {
        id: 2,
        title: "Services",
        url: "/services",
        isActive: false,
    },
    {
        id: 3,
        title: "Contact",
        url: "/contact",
        isActive: false,
    },
    {
        id: 4,
        title: "Blog",
        url: "/blog",
        isActive: false,
    }
]