import type React from "react";
export type LinksTitles = 'Home' | 'About Us' | 'Services' | 'Contact' | 'Blog'
export type Urls = '/' | '/about' | '/services' | '/contact' | '/blog'
type LinkItem = {
    id: number;
    title: LinksTitles;
    url: Urls;
    icon?: string;
    isActive?: boolean;
    element?: React.FC
};
export type { LinkItem };
