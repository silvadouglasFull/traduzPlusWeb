import type { Language } from "@components/carrosel/item/types";
import type React from "react";
export type LinksTitles = 'Home' | 'About Us' | 'Services' | 'Contact' | 'Blog'
export type Urls = '/' | '/about' | '/services' | '/contact' | '/blog'
type LinkItem = {
    id: number;
    title: string;
    url: Urls;
    icon?: string;
    isActive?: boolean;
    element?: React.FC
    language?: Language
};
export type { LinkItem };
